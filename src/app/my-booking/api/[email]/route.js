import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");

  try {
    const bookings = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return NextResponse.json({ bookings });
  } catch (error) {
    return NextResponse.json({ messege: "have a issus from api email", error });
  }
};
