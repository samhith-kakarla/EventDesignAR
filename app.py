from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[""], # Add Flutter origin here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.get('/')
def main():
    return { 'EventDesignAR': 'API' }