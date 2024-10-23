import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json({ message: "user Exist" }, { status: 304 });
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "EN occorud" }, { status: 500 });
  }
};
