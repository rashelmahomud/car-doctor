import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const res = await bookingsCollection.insertOne(newBooking);
    return NextResponse.json({ messege: "booking add successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "somthing want wrong in booking " },
      { status: 4000 }
    );
  }
};
