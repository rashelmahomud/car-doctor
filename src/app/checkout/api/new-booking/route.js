import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const res = await bookingsCollection.insertOne(newBooking);
    return Response.json({ messege: "booking add successfully" });
  } catch (error) {
    return Response.json(
      { message: "somthing want wrong in booking " },
      { status: 4000 }
    );
  }
};
