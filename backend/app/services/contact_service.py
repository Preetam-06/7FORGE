from sqlalchemy.orm import Session

from app.repositories.contact_repository import ContactRepository
from app.schemas.contact import ContactCreate
from app.services.email_service import EmailService


class ContactService:

    def __init__(self, db: Session):
        self.repository = ContactRepository(db)
        self.email_service = EmailService()

    async def create_inquiry(self, data: ContactCreate):
        if data.website:
            raise ValueError("Invalid contact submission")
        # 1. Save form data
        inquiry = self.repository.create(data)

        # 2. Send notification to 7Forge
        internal_email_sent = (
            await self.email_service.send_internal_notification(
                name=inquiry.name,
                email=inquiry.email,
                company=inquiry.company,
                service=inquiry.service,
                budget=inquiry.budget,
                message_text=inquiry.message,
                
            )
        )

        # 3. Record internal email result
        if internal_email_sent:
            inquiry = self.repository.update_email_status(
                inquiry,
                True,
            )

        # 4. Send acknowledgement to customer
        customer_email_sent = (
            await self.email_service.send_customer_acknowledgement(
                name=inquiry.name,
                email=inquiry.email,
                service=inquiry.service,
            )
        )

        # 5. Record customer acknowledgement result
        if customer_email_sent:
            inquiry = self.repository.update_auto_reply_status(
                inquiry,
                True,
            )

        return inquiry