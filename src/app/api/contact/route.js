import { connectMongoDB } from "@/lib/mongoose";
import Contact from "models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    await connectMongoDB();
    await Contact.create({ name, email, phone, message });

    return NextResponse.json({ message: "success!" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Error occurred while submitting contact form." },
      { status: 500 }
    );
  }
}
