import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        defrectionError: true,
      },
    });
    db = client.db("care-doctor");
    return db;
  } catch (error) {
    console.log("this is a error", error);
  }
};