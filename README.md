# 🐳 Docker Demo — Node.js + MongoDB

A simple Node.js application containerized with Docker, featuring MongoDB integration for tracking page visits. Built as part of **SMIT Batch-17 Docker Assignment**.

---

## 🚀 Live Demo

> Run locally using Docker — no installation of Node.js or MongoDB required!

---

## 📦 Docker Hub

```bash
docker pull ahmeddevx07/docker-demo:2.0
```

🔗 [View on Docker Hub](https://hub.docker.com/r/ahmeddevx07/docker-demo)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Backend Server |
| MongoDB | Database |
| Docker | Containerization |
| Docker Compose | Multi-container Setup |

---

## 📁 Project Structure

```
docker-demo/
├── app.js               # Main Node.js server
├── package.json         # Dependencies
├── Dockerfile           # Docker image instructions
├── docker-compose.yml   # Multi-container setup
├── .env                 # Environment variables (not pushed)
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

---

## ⚙️ Setup & Run

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed

### 1. Clone the Repository

```bash
git clone https://github.com/ahmeddevx07/docker-demo.git
cd docker-demo
```

### 2. Create .env File

```env
MONGO_URL=mongodb://username:password@db:27017/mydb?authSource=admin
MONGO_INITDB_ROOT_USERNAME=username
MONGO_INITDB_ROOT_PASSWORD=password
MONGO_INITDB_DATABASE=mydb
```

### 3. Run with Docker Compose

```bash
docker-compose up --build -d
```

### 4. Open in Browser

```
http://localhost:3000
```

You will see:
```
Hello from Docker! Total visits: 1
```

Each refresh increments the visit counter — data is saved in MongoDB! ✅

---

## 🐳 Docker Commands

```bash
# Build image manually
docker build -t docker-demo .

# Run single container
docker run -p 4000:3000 docker-demo

# Run with Compose (web + MongoDB)
docker-compose up -d

# Stop all containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

---

## 🔍 How It Works

```
Browser Request
      │
      ▼
[Web Container - Node.js :3000]
      │
      ▼
[DB Container - MongoDB :27017]
      │
      ▼
Saves visit to 'visits' collection
Returns total visit count
```

Both containers run on the same **Docker network** — they communicate using service names defined in `docker-compose.yml`.

---

## 📌 Key Concepts Covered

- ✅ Docker Images & Containers
- ✅ Writing a Dockerfile
- ✅ Port Mapping
- ✅ Docker Compose
- ✅ Environment Variables with `.env`
- ✅ Docker Volumes for data persistence
- ✅ Pushing to Docker Hub

---

## 👨‍💻 Author

**Muhammad Ahmed**
[GitHub](https://github.com/ahmeddevx07) • [LinkedIn](https://linkedin.com/in/ahmeddevx07) • [Portfolio](https://ahmeddevx07.vercel.app)

---

⭐ If you found this helpful, give it a star!
