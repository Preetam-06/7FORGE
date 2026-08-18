from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.database.session import get_db
from app.schemas.contact import ContactCreate
from app.services.contact_service import ContactService
from app.schemas.contact import ContactResponse


router = APIRouter(
    prefix="/api/v1",
    tags=["Contact"],
)


@router.post("/contact", response_model=ContactResponse)
async def create_contact(
    data: ContactCreate,
    db: Session = Depends(get_db),
):
    service = ContactService(db)

    try:
        inquiry = await service.create_inquiry(data)

    except ValueError:
        raise HTTPException(
            status_code=400,
            detail="Invalid contact submission"
        )
    return ContactResponse(
        success=True,
        message="Your inquiry has been received.",
        id=inquiry.id,
    )