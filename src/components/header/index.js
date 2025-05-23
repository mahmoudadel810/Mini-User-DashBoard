import Link from 'next/link.js';
import React from 'react';

export default function Header()
{
  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Users Dashboard</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-cyan-400 transition-colors duration-200 font-medium">Home</Link></li>
            <li><Link href="/users" className="hover:text-cyan-400 transition-colors duration-200 font-medium">Users</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition-colors duration-200 font-medium">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
