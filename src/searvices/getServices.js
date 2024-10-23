// import { NextResponse } from "next/server";

// export const getServices = async () => {
//   try {
//     const res = await fetch(`http://localhost:3000/searvices/api/get-all`);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return NextResponse.json({
//       messege: "service details have a issus",
//       error,
//     });
//   }
// };

// export const getServiceDetails = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/searvices/api/${id}`);
//     const service = await res.json();
//     return service;
//   } catch (error) {
//     return NextResponse.json({
//       messege: "service details have a issus",
//       error,
//     });
//   }
// };
