from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    company: str | None = Field(default=None, max_length=150)
    service: str = Field(min_length=1, max_length=100)
    budget: str | None = Field(default=None, max_length=100)
    message: str = Field(min_length=10, max_length=5000)
    website: str | None = Field(default=None,max_length=200)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: int