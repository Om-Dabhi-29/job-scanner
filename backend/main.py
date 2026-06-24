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
    return {
        "jobTitle": job.jobTitle,
        "companyName": job.companyName,
        "email": job.email
        
    }