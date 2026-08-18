import asyncio

from app.services.email_service import EmailService


async def main():
    service = EmailService()

    success = await service.send_email(
        to_email="contact.7forge@gmail.com",
        subject="7Forge SMTP Test",
        body="This is a test email from the 7Forge backend.",
    )

    print("Email sent:", success)


asyncio.run(main())