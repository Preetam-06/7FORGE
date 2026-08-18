import logging
from email.message import EmailMessage

import aiosmtplib

from app.config.settings import settings


logger = logging.getLogger(__name__)
class EmailService:

    async def send_internal_notification(
        self,
        name: str,
        email: str,
        company: str | None,
        service: str,
        budget: str | None,
        message_text: str,
    ) -> bool:

        message = EmailMessage()

        message["From"] = settings.smtp_username
        message["To"] = settings.smtp_username
        message["Reply-To"] = email
        message["Subject"] = f"New Contact Inquiry — {name}"

        body = f"""
New contact inquiry received.

Name: {name}
Email: {email}
Company: {company or "Not provided"}
Service: {service}
Budget: {budget or "Not provided"}

Message:
{message_text}
"""

        message.set_content(body)

        try:
            await aiosmtplib.send(
                message,
                hostname=settings.smtp_host,
                port=settings.smtp_port,
                username=settings.smtp_username,
                password=settings.smtp_password,
                start_tls=True,
            )

            return True

        except Exception:
            logger.exception("Failed to send email")
            return False

    async def send_customer_acknowledgement(
        self,
        name: str,
        email: str,
        service: str,
    ) -> bool:

        message = EmailMessage()

        message["From"] = settings.smtp_username
        message["To"] = email
        message["Subject"] = "We received your inquiry — 7Forge"

        body = f"""
Hi {name},

We received your inquiry regarding {service}.

Our team will review your requirements and get back to you soon.

Thank you for contacting 7Forge.

7Forge Team
"""

        message.set_content(body)

        try:
            await aiosmtplib.send(
                message,
                hostname=settings.smtp_host,
                port=settings.smtp_port,
                username=settings.smtp_username,
                password=settings.smtp_password,
                start_tls=True,
            )

            return True
        except Exception:
            logger.exception("Failed to send email")
            return False