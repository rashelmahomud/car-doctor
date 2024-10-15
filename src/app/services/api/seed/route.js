import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    return Response.json({ messege: "seeded succefully" });
  } catch (error) {
    console.log("hello error", error);
  }
};
