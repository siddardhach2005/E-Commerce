# E-Commerce Web Application

## Overview

This project is a full-stack E-Commerce Web Application developed using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript. The application allows users to browse products, add products to the cart, place orders, and manage their purchases. It also includes role-based access control where administrators can manage products and users can place orders.

## Features

### User Features

* User Registration
* User Login
* Browse Product Catalog
* Add Products to Cart
* Checkout Functionality
* View Order History
* Responsive Design

### Admin Features

* Admin Login
* Add Products
* Update Products
* Delete Products
* Manage Product Inventory

### Backend Features

* RESTful APIs
* JWT Authentication
* Role-Based Authorization
* MongoDB Database Integration
* Product Management APIs
* Order Management APIs

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

## Sample Products

### Electronics

* boAt Rockerz 412 Wireless Headphones
* Urban Pulse Smart Watch
* PWX RapidWave U30 Gaming Mouse

### Clothing

* Men's Cotton Casual Shirt
* TAGAS Hoodie
* Wrogn Denim Jeans

### Navigate to Backend Folder

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Ensure MongoDB is running on your system.

### Run Server

```bash
node server.js
```

Expected Output:

```text
MongoDB Connected
Server running on port 5000
```

### Run Frontend

Open:

```text
frontend/index.html
```

in your browser.

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Products

#### Get All Products

```http
GET /api/products
```

#### Add Product (Admin Only)

```http
POST /api/products
```

#### Update Product

```http
PUT /api/products/:id
```

#### Delete Product

```http
DELETE /api/products/:id
```

### Orders

#### Create Order

```http
POST /api/orders
```

#### Get User Orders

```http
GET /api/orders
```

## Database Collections

### Users Collection

```json
{
  "_id": "...",
  "username": "admin",
  "email": "admin@gmail.com",
  "password": "encrypted_password",
  "role": "admin"
}
```

### Products Collection

```json
{
  "_id": "...",
  "name": "Wireless Headphones",
  "description": "Noise cancelling headphones",
  "price": 2999,
  "stock": 20
}
```

### Orders Collection

```json
{
  "_id": "...",
  "userId": "...",
  "products": [],
  "totalAmount": 5998,
  "status": "Pending"
}
```

## Learning Outcomes

This project helped in understanding:

* Full-Stack Web Development
* REST API Development
* User Authentication and Authorization
* Role-Based Access Control
* MongoDB Database Design
* CRUD Operations
* Cart and Order Management
* Frontend and Backend Integration
* Dynamic Data Handling
* Responsive Web Design

## Future Improvements

* Payment Gateway Integration
* Product Search and Filtering
* Product Categories
* User Profile Management
* Email Notifications
* Real-Time Order Tracking

## Author

**Siddardha Chennamsetti**

Computer Science Engineering Student

GitHub: https://github.com/siddardhach2005
