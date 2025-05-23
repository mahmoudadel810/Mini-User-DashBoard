<!-- @format -->

# Mini User Dashboard - Next.js Application

A modern Next.js application for managing users with a beautiful UI built with Next.js, React, and Tailwind CSS.

<img width="1433" alt="Screenshot 2025-05-23 at 4 22 24 PM" src="https://github.com/user-attachments/assets/759aa05c-8052-469c-8758-ae993f78f48b" />

### Features


- **User Management**: Create, view, update, and delete users
- **Profile Images**: Upload and manage user profile pictures
- **Responsive Design**: Beautiful UI that works across devices
- **Internationalization**: Multi-language support with i18next
- **MongoDB Integration**: Secure data storage with Mongoose

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Internationalization**: i18next
- **Styling**: Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/             # API Routes
│   ├── users/           # User management pages
│   │   ├── [id]/        # User detail page
│   │   ├── add/         # Add user page
│   │   └── all/         # All users page
│   └── page.js          # Homepage
└── components/          # Reusable UI components
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MongoDB](https://www.mongodb.com/docs/)
- [i18next](https://www.i18next.com/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
