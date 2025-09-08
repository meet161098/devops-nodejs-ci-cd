# Node.js App with CI/CD Pipeline using GitHub Actions & Docker

## Tech Stack
- Node.js + Express
- Docker
- GitHub Actions
- AWS EC2 (Ubuntu)

## Features
- REST API with health and version routes
- Dockerized app built inside EC2
- CI/CD pipeline: push to GitHub auto-deploys to EC2

## How It Works
1. Push to GitHub `main`
2. GitHub Actions SSH into EC2
3. Pull latest code
4. Build Docker image
5. Run container on port 3000

## Live Demo
http://52.66.122.106:3000/

## 📁 Project Structure
├── index.js
├── .env
├── Dockerfile
├── .github/workflows/deploy.yml
