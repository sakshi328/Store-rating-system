<img width="917" height="845" alt="Screenshot 2026-06-30 182357" src="https://github.com/user-attachments/assets/dad9a7de-d50c-44ac-8bd0-e8dab03c7afe" />
<img width="921" height="853" alt="Screenshot 2026-06-30 182526" src="https://github.com/user-attachments/assets/6ecc7759-ef77-4849-b4c9-c969bc1cfe5f" />
<img width="938" height="862" alt="Screenshot 2026-06-30 184450" src="https://github.com/user-attachments/assets/b7777b40-2c4c-4956-9432-e931f0082107" />

# Store-rating-system
#  Store Rating System

A backend project built using **Node.js, Express, MySQL, and JWT Authentication**.

Users can register, login, rate stores, and view average ratings.

---

##  Features

- User Registration & Login
- JWT Authentication
- Add Stores
- Rate Stores (1–5 stars)
- Average Rating Calculation
- Protected APIs using Middleware

---

##  Tech Stack

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt.js

---
##  How to Run Project

```bash
cd server
npm install
npm run dev
# Environment Variables

Create a .env file inside server folder:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=store_rating_db
JWT_SECRET=secret_key
# API Endpoints

# Auth APIs
POST /api/auth/register
POST /api/auth/login
# Store APIs
POST /api/stores/add
GET /api/stores
GET /api/stores/with-rating
 #Rating APIs
POST /api/ratings/rate

# Output Flow
User Login → Token Generate
Submit Rating
View Stores with Average Rating

 Author

Sakshi Patil
