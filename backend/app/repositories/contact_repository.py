from sqlalchemy.orm import Session

from app.models.contact import ContactInquiry
from app.schemas.contact import ContactCreate


class ContactRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, data: ContactCreate) -> ContactInquiry:
        inquiry = ContactInquiry(
            name=data.name,
            email=data.email,
            company=data.company,
            service=data.service,
            budget=data.budget,
            message=data.message,
        )

        try:
            self.db.add(inquiry)
            self.db.commit()
            self.db.refresh(inquiry)

            return inquiry

        except Exception:
            self.db.rollback()
            raise

    def update_email_status(
        self,
        inquiry: ContactInquiry,
        email_sent: bool,
    ) -> ContactInquiry:

        inquiry.email_sent = email_sent

        try:
            self.db.commit()
            self.db.refresh(inquiry)

            return inquiry

        except Exception:
            self.db.rollback()
            raise

    def update_auto_reply_status(
        self,
        inquiry: ContactInquiry,
        auto_reply_sent: bool,
    ) -> ContactInquiry:

        inquiry.auto_reply_sent = auto_reply_sent

        try:
            self.db.commit()
            self.db.refresh(inquiry)

            return inquiry

        except Exception:
            self.db.rollback()
            raise