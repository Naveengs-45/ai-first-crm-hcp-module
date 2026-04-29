from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agent import run_agent

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message":"working"}

@app.post("/log-interaction")
def log_interaction(payload: dict):
    return {
        "status":"saved",
        "data":payload
    }

@app.post("/agent")
def agent_route(payload: dict):

    user_input = payload["message"]

    result = run_agent(user_input)

    return result