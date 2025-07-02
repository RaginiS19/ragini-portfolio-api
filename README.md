# 💼 Ragini Shirwalkar Portfolio API

A full-stack Node.js + Express app featuring an admin dashboard for managing **Projects** and **Skills**, along with public-facing JSON API endpoints. Built using MongoDB Atlas and Pug templates.

---

## 🌟 Features

- 🔐 Admin dashboard (`/admin`) to:
  - ✅ Add, update, and delete **Projects**
  - ✅ Add, update, and delete **Skills**
- 🧾 JSON API for public data
- 🌍 MongoDB Atlas integration
- 🎨 Responsive, custom-styled UI (no obvious framework)
- 📁 Modular structure for easy maintenance
- ✅ Environment configuration via `.env`

---

## 🧠 Tech Stack

- **Node.js** + **Express**
- **MongoDB Atlas** via **Mongoose**
- **Pug** (server-side templates)
- **CSS** (custom)
- **dotenv**, **nodemon**

---

## 🚀 API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/api/projects`  | Returns all projects JSON |
| GET    | `/api/skills`    | Returns all skills JSON   |

---

## 🔧 Running Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/RaginiS19/ragini-portfolio-api.git
   cd ragini-portfolio-api


2. **Install dependencies
     npm install

3. **Create .env in the root
     MONGODB_URI=your-mongodb-uri

4. **Run the app
     npm run dev     # for development with nodemon
     npm start       # for production

5.  **Open in browser
    http://localhost:3000


🌐 Live Demo

🟢 Deployed URL:
👉 https://your-deployment-url.com
(Replace this with your Render or Vercel link once deployment is successful.)

🗂 Folder Structure

├── models/
│   ├── project.js
│   └── skill.js
├── routes/
│   ├── admin.js
│   ├── api.js
│   └── index.js
├── views/
│   ├── layout.pug
│   ├── index.pug
│   └── admin.pug
├── public/
│   ├── styles.css
│   └── script.js
├── .env.example
├── index.js
├── package.json
└── README.md



 