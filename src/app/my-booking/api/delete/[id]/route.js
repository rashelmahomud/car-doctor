import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const deleteCollection = await db.collection("bookings");

  try {
    const res = await deleteCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({
      messege: "successfully deleted items server",
      responce: res,
    });
  } catch (error) {
    return Response.json({ messege: "somthing want wrong" });
  }
};
