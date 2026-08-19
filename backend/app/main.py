from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.contact_router import router as contact_router


app = FastAPI(
    title="7Forge API",
    version="1.0.0",
    docs_url=None,
    redoc_url=None,
    openapi_url=None,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(contact_router)


@app.get("/")
def root():
    return {
        "message": "7Forge API is running"
    }