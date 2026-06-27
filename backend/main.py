from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend Running"}

class JobData(BaseModel):
    jobTitle: str
    companyName: str
    salary: str
    location: str
    skills: str
    email: str
    description: str

@app.post("/scan")
def scan_job(job: JobData):

    risk = 0
    red_flags = []

    email = job.email.lower()
    salary = job.salary.lower()
    description = job.description.lower()

    # Email check
    if "@gmail.com" in email or "@yahoo.com" in email or "@outlook.com" in email:
        risk += 20
        red_flags.append("Personal email used")

    # Salary check
    if "50000" in salary or "100000" in salary or "1 lakh" in salary:
        risk += 20
        red_flags.append("Unrealistic salary")

    # Description checks
    if "urgent" in description:
        risk += 10
        red_flags.append("Urgent hiring")

    if "no interview" in description:
        risk += 20
        red_flags.append("No interview required")

    if "registration fee" in description:
        risk += 40
        red_flags.append("Registration fee requested")

    if "whatsapp" in description:
        risk += 15
        red_flags.append("WhatsApp contact")

    if "telegram" in description:
        risk += 15
        red_flags.append("Telegram contact")

    if "no experience" in description:
        risk += 10
        red_flags.append("No experience required")

    if "investment" in description:
        risk += 25
        red_flags.append("Investment required before joining")
 
    # Maximum risk score is 100
    if risk > 100:
          risk = 100

    # Risk level
    if risk >= 60:
        status = "High Risk"
    elif risk >= 30:
        status = "Medium Risk"
    else:
        status = "Low Risk"

    return {
        "riskScore": risk,
        "status": status,
        "redFlags": red_flags
    }