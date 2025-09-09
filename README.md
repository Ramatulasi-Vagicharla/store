# 🛍️ Fake Store Dashboard

A mini e-commerce dashboard built with **Next.js** that allows users to browse products, search, filter, sort, view product details, and add items to a cart with persistent storage.  
Deployed with **Vercel**.

---

## 🚀 Features

- **Product Listing Page**
  - Browse products in a responsive grid layout
  - Search by product title
  - Filter by category
  - Sort by price (Low → High / High → Low)
  - Loading skeletons while fetching
  - Error handling with retry

- **Product Detail Page**
  - View product title, price, description, and rating
  - Add to Cart button

- **Cart**
  - Add to cart from the product detail page
  - Cart state is persisted in `localStorage` (remains after refresh)
  - No cart summary page required (per requirements)

- **UI / UX**
  - Dark/Light mode toggle (persisted in localStorage)
  - Mobile-first responsive design
  - Clean and minimal layout

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [Fake Store API](https://fakestoreapi.com/) (Product data)
- [React Icons](https://react-icons.github.io/react-icons/) (Icons)
- LocalStorage (Cart + Theme persistence)
- CSS / Flexbox / Grid for layout

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Ramatulasi-Vagicharla/store.git
cd store

Install dependencies:

npm install


Run development server:

npm run dev


Open in browser: http://localhost:3000

Build for production:

npm run build
npm start
