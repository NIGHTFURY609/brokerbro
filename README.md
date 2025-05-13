# 📇 Random User Directory

A professional, fast, and elegant **Next.js 13+ App Router** app that fetches and displays random user profiles. This project uses **Tailwind CSS** for styling and **Server-Side Rendering (SSR)** for blazing-fast load times.

## 🚀 Features

- 🔍 **Searchable Dropdown** – Filter users by **first name** using an input with live search and dropdown results.
- 🧑‍💼 **User Profile Viewer** – Click on a user to view full profile details including photo, email, gender, and location.
- ⚡️ **Server-Side Data Fetching** – Users are fetched at build time using SSR for fast initial page load.
- 🎨 **Clean UI** – Professionally styled using Tailwind CSS and a modern color palette.
- 📱 **Responsive** – Fully responsive design, optimized for mobile and desktop.

---

## 🧑‍💻 Tech Stack

- **Framework:** [Next.js 13+](https://nextjs.org/docs) with the **App Router**
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **API:** [Random User API](https://randomuser.me/)
- **Rendering:** Server-side rendering (`async` `page.tsx`)

---
🔧 Development Notes
All data is fetched using SSR inside page.tsx via fetchUsers().

Dropdown is lazily rendered using React.lazy for performance.

User filtering is done client-side in UserDropdownContent.tsx.






This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
##### Installation  
```bash
# Clone the repository

git clone https://github.com/yourusername/issuewiz.git
```
# Navigate to the frontend directory
```bash
cd ../client
```
## Getting Started
# Install dependencies
```bash
npm install
```
# Run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
