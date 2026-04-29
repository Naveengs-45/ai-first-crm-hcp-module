# AI First CRM - HCP Module

## Overview
This project is an AI-first CRM prototype for logging Healthcare Professional interactions using structured forms and conversational AI.

## Features
- Structured interaction logging
- AI conversational logging
- Interaction history
- LangGraph agent routing
- 5 tools:
  - Log Interaction
  - Edit Interaction
  - HCP Lookup
  - Follow-up Recommendation
  - Summarization

## Tech Stack
Frontend:
- React

Backend:
- FastAPI
- Python
- LangGraph

LLM:
- Groq-ready (gemma2-9b-it placeholder)

## Run Frontend
cd frontend
npm install
npm run dev

## Run Backend
cd backend
uvicorn app:app --reload