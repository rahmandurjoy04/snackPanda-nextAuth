# SnacksPanda

A modern food product management web application built with **Next.js 15**, **TailwindCSS**, and **MongoDB**.  
Users can browse, add, and view detailed product information. The app also supports authentication and role-based access.

---

## Features

- Browse all products with images, descriptions, and prices.
- View detailed product pages with nutritional info and quantity.
- Add new products (admin/authorized users).
- Highlights section showing featured products.
- Responsive design with TailwindCSS.
- Server-side rendering with caching and revalidation.

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/snackspanda.git
cd snackspanda
Install dependencies


npm install
Environment variables

Create a .env.local file at the root and add:

env

NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key


Run the development server

npm run dev
Open http://localhost:3000 in your browser.

Build for production


npm run build
npm start
Route Summary
Pages
Route	Method	Description
/	GET	Home page
/products	GET	List all products
/products/[id]	GET	Product details page
/products/add	GET / POST	Add new product form & submission

API Routes
Route	Method	Description
/api/products	GET	Fetch all products
/api/products	POST	Add a new product
/api/products/[id]	GET	Fetch product by ID