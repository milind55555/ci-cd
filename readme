# 🚀 My First CI/CD Project (Docker + GitHub Actions)

A simple full-stack project demonstrating **CI/CD pipeline using GitHub Actions, Docker, and Docker Hub**.

---


# 🧪 Local Setup

## Run Backend

cd backend
npm install
node server.js


Backend runs on:

text id="c8v3ka"
http://localhost:5000/api/message


---

## Run Frontend

cd frontend
python -m http.server 8080


Frontend runs on:

text id="n9q1ld"
http://localhost:8080


---

# 📁 Project Structure

first-cicd-project/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
└── README.md


---


# ⚙️ Tech Stack

* Frontend → HTML, CSS, JavaScript
* Backend → Node.js + Express
* Containerization → Docker
* CI/CD → GitHub Actions
* Registry → Docker Hub
* Deployment → Linux Server (Ubuntu)

---


# 🧪 Local Setup

## Run Backend

cd backend
npm install
node server.js


Backend runs on:

text id="c8v3ka"
http://localhost:5000/api/message


---

## Run Frontend

cd frontend
python -m http.server 8080


Frontend runs on:

text id="n9q1ld"
http://localhost:8080





# 🔄 CI/CD Architecture

Developer
   ↓
GitHub Push
   ↓
GitHub Actions (CI)
   ├── Build Frontend Image
   ├── Build Backend Image
   ├── Push to Docker Hub
   ↓
GitHub Actions (CD)
   ↓
SSH into Server
   ↓
Pull Latest Images
   ↓
Restart Containers
   ↓
🚀 Live Application


---


# 🐳 Docker Setup

## Backend Dockerfile

dockerfile id="v3k8xa"
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]


---

## Frontend Dockerfile

FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80


---

# 🏗️ Docker Commands

## Build Images

bash id="c9w2pa"
docker build -t backend:v1 ./backend
docker build -t frontend:v1 ./frontend


---

## Run Containers

docker run -d --name backend -p 5000:5000 backend:v1
docker run -d --name frontend -p 8080:80 frontend:v1


---

## Verify

bash id="w1q8kd"
docker ps
docker images
docker logs backend


---

# ☁️ Docker Hub Push

docker login


## Tag Images

docker tag backend:v1 <username>/backend:latest
docker tag frontend:v1 <username>/frontend:latest


## Push Images

docker push <username>/backend:latest
docker push <username>/frontend:latest


---


---

🔐 GitHub Secrets Setup

To enable CI/CD pipeline, we store sensitive credentials securely using GitHub Secrets.

Go to:

GitHub Repository
 → Settings
 → Secrets and variables
 → Actions
 → New repository secret

Required Secrets
1. Docker Hub Credentials
DOCKER_USERNAME = your_dockerhub_username
DOCKER_PASSWORD = your_dockerhub_access_token

⚠️ Recommended: Use Docker Hub Access Token instead of password

2. Server Credentials (for CD)
SERVER_HOST = your_server_ip
SERVER_USER = ubuntu (or your user)
SERVER_SSH_KEY = private_ssh_key


# 🌐 Server Deployment (CD)

## SSH into Server

ssh ubuntu@<server-ip>


## Install Docker

sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker


## Login to Docker Hub (one-time)

docker login step


---

## Deploy Application

docker pull <username>/frontend:latest
docker pull <username>/backend:latest


## Run Containers

docker run -d --name backend -p 5000:5000 <username>/backend:latest

 

---

# 🔁 Git Commands

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main


---

# 🚀 CI/CD Flow (Final Understanding)

1. Developer writes code
2. git push
3. GitHub Actions triggers
4. Docker images are built
5. Images pushed to Docker Hub
6. Server pulls latest images
7. Containers restart
8. Application is live 🚀


---

# 🎯 What You Learned

* Full-stack containerization
* Docker images & containers
* GitHub Actions CI/CD pipeline
* Docker Hub registry workflow
* Manual + automated deployment
* Real-world DevOps workflow




# 🔐 DevSecOps Enhancements (Linting + Gitleaks)

To improve code quality and security, we added:

* 🧹 Linting (code quality check)
* 🔐 Gitleaks (secret scanning)

These run automatically inside GitHub Actions **before Docker build**.

---

## 🧹 1. Linting (Code Quality Check)

### Backend Lint Setup

Install ESLint:

cd backend
npm install eslint --save-dev


Initialize ESLint:

npx eslint --init


---

### Add lint script in `package.json`

"scripts": {
  "start": "node server.js",
  "lint": "eslint ."
}


---

### Run Locally

bash id="l4"
npm run lint


---

### What it does

✔ Checks syntax errors
✔ Detects bad coding practices
✔ Ensures clean code before build


---

## 🔐 2. Gitleaks (Secret Scanning)

Gitleaks ensures no sensitive data (API keys, passwords, tokens) is pushed to GitHub.

---

### GitHub Actions Integration

Add this step in your CI pipeline:

- name: Checkout Code
  uses: actions/checkout@v4

- name: Run Gitleaks Scan
  uses: gitleaks/gitleaks-action@v2


---

### How to verify Gitleaks

#### Case 1: Clean Code

✔ No leaks detected
✔ Pipeline continues


#### Case 2: Secret Found (Test Case)

If you accidentally add:

js id="g3"
const API_KEY = "123456SECRET";


Pipeline fails:

text id="g4"
❌ Gitleaks failed: secret detected
⛔ CI stopped


---

## 🚀 Updated CI/CD Pipeline Flow

Now your pipeline becomes:

1. Git Push
2. GitHub Actions Trigger
3. 🔐 Gitleaks Scan (Security Check)
4. 🧹 ESLint (Code Quality Check)
5. Docker Build (Frontend + Backend)
6. Push to Docker Hub
7. Deploy to Server (CD)
8. Live Application 🚀


---

## 🎯 Why This Matters

✔ Prevents secrets leaks before deployment
✔ Enforces clean code standards
✔ Adds DevSecOps layer to CI/CD
✔ Industry-level workflow


---

explore more:

* 🔥 Trivy Docker image scanning
* 🔥 SonarQube dashboard (industry level)
* 🔥 PR-based CI checks (run only on pull requests)
* 🔥 README badges (CI passing, security passed)

