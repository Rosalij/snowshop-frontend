# SnowShop AB – Frontend

A responsive **Vue 3** frontend SPA application for **SnowShop AB**, an admin interface used to manage products, stock amount, categories, and user accounts.

This frontend consumes a REST API backend and provides authentication, log in and CRUD functionality.
All of the CSS is made using Bootstrap Framework.
The Backend Webservice is published at: ( https://github.com/Rosalij/snowshopbackend.git )
which is using a mongoDB Atlas Database.
---
A live version is available at: ( https://snowshopadmin.netlify.app/ )
## 🚀 Features

* 🔐 Authentication (login & logout)
* 👤 User profile page
* 🔑 Change password
* 👥 actions (add & delete users)
* 📦 Product management (add, edit, delete)
* 🏷 Category filtering
* 🔍 Search products
* 📱 Fully responsive (desktop & mobile)
* 🧭 Vue Router navigation
* 📌 Persistent login using JWT

---

## 🛠 Tech Stack

* **Vue 3** (Composition API)
* **Pinia** – state management
* **Vue Router** – routing
* **Bootstrap 5** – layout & responsiveness
* **Fetch API** – HTTP requests

---


---

## 🔐 Authentication Flow

* User logs in via `/users/login`
* Backend returns a **JWT token** and user object
* Token is stored in `localStorage`
* Auth state is managed using **Pinia**
* Protected routes require login

---



## 📦 API Integration

The frontend communicates with the backend using these endpoints:

* `POST /users/login`
* `GET /products`
* `POST /products`
* `PATCH /products/:id`
* `DELETE /products/:id`
* `GET /categories`
* `PATCH /users/:id` (change password)


## ⚙️ Setup & Run Locally


npm install
npm run dev


