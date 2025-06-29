# Ragini Shirwalkar Portfolio API

This is a Node.js + Express portfolio web app that features an admin dashboard to manage projects and skills, and exposes a JSON API to serve data for future use (e.g. a public portfolio frontend).

---

## 🌟 Features

- Admin dashboard built with Pug to:
  - Add/Delete **Projects**
  - Add/Delete **Skills**
- JSON API endpoints for both collections
- Connected to MongoDB Atlas
- Responsive, customized CSS (no obvious framework)
- Environment variable support via `.env`

---

## 🧠 Tech Stack

- Node.js
- Express
- MongoDB Atlas (via Mongoose)
- Pug Template Engine
- CSS (custom)

---

## 🚀 API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/api/projects`  | Returns all projects JSON |
| GET    | `/api/skills`    | Returns all skills JSON   |

---

## 🔧 How to Run Locally

1. Clone the repo  
   `git clone <your-github-url>`

2. Install dependencies  
   `npm install`

3. Create a `.env` file in the root folder with:


4. Run the app  
`npm run dev` (for nodemon) or `npm start`

5. Open in browser  
`http://localhost:3000`

---

## 🌐 Live Demo

**Deployed link:**  
[https://your-deployment-url.com](https://your-deployment-url.com)

---

## 🔒 Security

The `.env` file is ignored in GitHub for security purposes. Please include it manually if running locally.

---

## 📁 Folder Structure

├── models/
│ ├── project.js
│ └── skill.js
├── routes/
│ ├── admin.js
│ ├── api.js
│ └── index.js
├── views/
│ ├── layout.pug
│ ├── index.pug
│ └── partials/
│ ├── admin-projects.pug
│ └── admin-skills.pug
├── public/
│ └── styles.css
├── .env
├── index.js
└── package.json

