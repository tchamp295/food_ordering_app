import { connectMongoDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    //   console.log({name, email, password});
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json(
      { message: "User Registered successfully !" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "error occurred while registering user! " },
      { status: 500 }
    );
  }
}
