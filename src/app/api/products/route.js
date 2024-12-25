import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongoose";

export async function POST(req) {
  try {
    await connectMongoDB();

    const { name, image, price, description, category } = await req.json();

    // Validate required fields
    if (!name || !image || !price || !description || !category) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    // Create product
    const product = await Product.create({
      name,
      image,
      price,
      description,
      category,
      inStock: true,
      quantity: 0,
      sold: 0,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
