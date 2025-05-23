import { connectDB } from "../../_lib/dbconnection.js";
import User from "../../_lib/models/users.js";
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
    const users = await User.find();
    return new Response(JSON.stringify({ data: users }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}




export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const file = formData.get("profilePicture");

  if (!file || !file.name) {
    return NextResponse.json({ message: "No image uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  console.log("Bytes: ", bytes);
  console.log("Buffer: ", buffer);


  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(uploadDir, filename);

  await writeFile(filepath, buffer);

  const imageUrl = `/uploads/${filename}`;

  try {
    const user = await User.create({
      name,
      email,
      password,
      image: imageUrl,
    });

    return NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
