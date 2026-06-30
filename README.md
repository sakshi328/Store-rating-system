#  Store Rating System

A backend project built using **Node.js, Express, MySQL, and JWT Authentication**.  
Users can register, login, and rate stores. Stores show average ratings.

---

##  Features

- User Registration & Login
- JWT Authentication
- Add Stores
- Rate Stores (1–5 stars)
- Average Rating Calculation
- Protected APIs using Middleware

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- JWT
- bcrypt.js


##  How to Run

```bash
cd server
npm install
npm run dev
 Environment Variables

Create .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=store_rating_db
JWT_SECRET=secret_key
  API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
Stores
POST /api/stores/add
GET /api/stores
GET /api/stores/with-rating
Ratings
POST /api/ratings/rate
 Author

Sakshi Patil

<img width="938" height="862" alt="Screenshot 2026-06-30 184450" src="https://github.com/user-attachments/assets/fc005fff-45cc-41ed-a56b-5ad0528b2d63" />
<img width="921" height="853" alt="Screenshot 2026-06-30 182526" src="https://github.com/user-attachments/assets/053abb91-7a59-49a9-b36b-2eabd4250a8f" />
<img width="917" height="845" alt="Screenshot 2026-06-30 182357" src="https://github.com/user-attachments/assets/3111b158-0aa7-4eda-a8af-dc244f5bd05a" />



