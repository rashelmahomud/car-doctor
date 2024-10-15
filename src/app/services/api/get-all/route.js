import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const serviceCollection = db.collection("services");

  try {
    const service = await serviceCollection.find().toArray();
    return Response.json({ service });
  } catch (error) {
    console.log(error);
  }
};
