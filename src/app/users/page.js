import React from "react";
import { GET } from "../api/user/route.js";
import Link from "next/link.js";
import Image from "next/image.js";

export default async function Users()
{
  const res = await GET();
  const { data } = await res.json();
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Users Dashboard</h1>
          <p className="text-gray-600 text-lg">Manage and view all registered users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 bg-gradient-to-r from-blue-500 to-purple-600">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              <div className="pt-16 pb-6 px-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">{user.name}</h2>
                <p className="text-gray-500 text-center mb-6">{user.email}</p>

                <Link
                  href={`/users/${user._id}`}
                  className="block w-full text-center py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/users/add"
            className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
          >
            Add New User
          </Link>
        </div>
      </div>
    </div>
  );
}
