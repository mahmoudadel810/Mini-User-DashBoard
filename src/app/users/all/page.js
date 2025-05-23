import React, { Suspense } from "react";
import { GET } from "../../api/user/route.js";
import Image from "next/image.js";

export default async function AllUsers() {
  const res = await GET();
  const { data } = await res.json();
  console.log(data);
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">All Users</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Image</th>
          </tr>
        </thead>
        <tbody>
          <Suspense
            fallback={
              <tr>
                <td colSpan="3" className="text-center">
                  Loading...
                </td>
              </tr>
            }
          >
            {data.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="py-2 px-4">{user._id}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </td>
              </tr>
            ))}
          </Suspense>
        </tbody>
      </table>
    </div>
  );
}
