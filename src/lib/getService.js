import { NextResponse } from "next/server";

export const getServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return NextResponse.json({
      messege: "have a issus from get service server",
    });
  }
};

export const getServiceDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`,
      {
        cache: "no-cache",
      }
    );
    console.log(res);
    const service = await res.json();
    return service;
  } catch (error) {
    return NextResponse.json({
      messege: "have a issus from get service details server",
    });
  }
};
