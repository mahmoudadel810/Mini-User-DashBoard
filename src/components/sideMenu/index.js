"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";

export default function SideMenu()
{
  const currentPath = usePathname();
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white p-6 flex flex-col shadow-xl">
      <div className="mb-10">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Dashboard</h1>
        <p className="text-blue-200 text-sm mt-1">User Management</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-3">
          <li>
            <Link
              href="/users/all"
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${currentPath === "/users/all"
                ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 shadow-md"
                : "hover:bg-white/10"
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className={`font-medium ${currentPath === "/users/all" ? "text-cyan-300" : ""}`}>All Users</span>
            </Link>
          </li>
          <li>
            <Link
              href="/users/add"
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${currentPath === "/users/add"
                ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 shadow-md"
                : "hover:bg-white/10"
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span className={`font-medium ${currentPath === "/users/add" ? "text-cyan-300" : ""}`}>Add User</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-blue-800/50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-blue-300">User Dashboard</p>
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
