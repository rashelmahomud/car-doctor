import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const serviceCollection = await db.collection("services");

  try {
    const service = await serviceCollection.findOne({ _id: params.id });
    console.log(service);
    return NextResponse.json({ service });
  } catch (error) {
    return NextResponse.json({
      messege: "have a issus from service api",
      error,
    });
  }
};
