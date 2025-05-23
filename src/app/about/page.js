import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to the Users Dashboard! This application allows you to manage
        users efficiently.
      </p>
      <p className="text-lg text-gray-700 mt-2">
        This is a simple dashboard for managing users. It is built with Next.js
      </p>
    </div>
  );
}
