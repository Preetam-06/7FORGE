This is a [Next.js](https://nextjs.org) website with a production-ready Docker setup.

## Run the Production Build with Docker

Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop/) on your PC, then open PowerShell in this project folder.

Build the production image:

```powershell
docker build -t 7forge-website:production .
```

Start the production container:

```powershell
docker run --name 7forge-website -p 3000:3000 7forge-website:production
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To stop and remove the container:

```powershell
docker stop 7forge-website
docker rm 7forge-website
```

The Docker image uses Next.js standalone output and runs as a non-root user.

## Getting Started

### Frontend

The frontend is a Next.js application. Its dependencies are defined in
`package.json` and locked in `package-lock.json`.

Install the frontend dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Backend

The backend is a FastAPI application. Its Python dependencies are listed in
`backend/app/requirements.txt`.

From the project root, create a virtual environment and install the backend
dependencies:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r app\requirements.txt
```

Create `backend/.env` with the database and SMTP settings required by the
application:

```env
DATABASE_URL=postgresql+psycopg://username:password@localhost:5432/database_name
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=your-email@example.com
SMTP_PASSWORD=your-email-password
```

Run the database migrations and start the API:

```powershell
alembic upgrade head
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API is available at [http://localhost:8000](http://localhost:8000), and
the contact form uses `http://127.0.0.1:8000/api/v1/contact`.

Run the frontend and backend in separate terminals during local development.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
