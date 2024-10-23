import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const serviceCollection = db.collection("services");

  try {
    const service = await serviceCollection.find().toArray();
    return NextResponse.json({ service });
  } catch (error) {
    return NextResponse.json({ messege: "have a issus from get all" });
  }
};
