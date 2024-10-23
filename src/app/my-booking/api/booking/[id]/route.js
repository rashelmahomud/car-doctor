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

//bookings update code
export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const updateCollection = await db.collection("bookings");
  const { phone, address, date } = await request.json();

  try {
    const res = await updateCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          phone,
          address,
          date,
        },
      },
      { upsert: true }
    );
    return Response.json({
      messege: "successfully update items server",
      responce: res,
    });
  } catch (error) {
    return Response.json({ messege: "somthing want wrong" });
  }
};
//===============
