"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdatePage = ({ params }) => {
  const { data } = useSession();
  const [booking, setBooking] = useState([]);

  const loadBooking = async () => {
    const bookingDetails = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${params.id}`
    );
    const data = await bookingDetails.json();
    setBooking(data.responce);
  };

  const handelUpdateBooking = async (event) => {
    event.preventDefault();
    const updateBookgin = {
      phone: event.target.phone.value,
      date: event.target.date.value,
      address: event.target.address.value,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${params.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updateBookgin),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      toast.success("sussfully Updated data");
    } else {
      toast.error("have a some issus");
    }
    return res;
  };

  useEffect(() => {
    loadBooking();
  }, [params]);

  return (
    <div className="container mx-auto my-10">
      <div className="relative">
        <Image
          src={"/assets/images/banner/3.jpg"}
          alt="Sample Image"
          width={600}
          height={400}
          className=" w-full h-80 rounded"
        />

        <div className="absolute inset-0 bg-black opacity-60 rounded"></div>

        <div className="absolute inset-0 flex items-center ml-20 text-white">
          <h2 className="text-3xl font-bold">Check Out</h2>
        </div>
        <div className="absolute inset-0 text-white flex place-items-end justify-center">
          <button className="bg-primary p-2 font-semibold rounded-t-lg">
            Home/Service Details
          </button>
        </div>
      </div>
      <div>
        <form
          onSubmit={handelUpdateBooking}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mx-20   bg-gray-400 rounded mt-10 lg:p-24 p-3"
        >
          <input
            type="text"
            defaultValue={data?.user?.name}
            name="name"
            className="bg-white px-5 border-none rounded py-3  items-end"
            placeholder="First Name"
          />
          <input
            type="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            name="date"
            className="bg-white px-5 border-none rounded py-3 "
            placeholder="date: "
          />
          <input
            type="email"
            name="email"
            disabled
            defaultValue={data?.user?.email}
            className="bg-white px-5 border-none rounded py-3"
            placeholder="Email:"
          />
          <input
            type="number"
            defaultValue={booking.servicePrice}
            name="price"
            disabled
            className="bg-white px-5 border-none rounded py-3"
            placeholder="Due amaunt"
          />
          <input
            defaultValue={booking.phone}
            type="phone"
            name="phone"
            className="bg-white px-5 border-none rounded py-3"
            placeholder="phone:"
          />
          <input
            defaultValue={booking.address}
            type="address"
            name="address"
            className="bg-white px-5 border-none rounded py-3"
            placeholder="current address:"
          />

          <button
            type="submit"
            className="btn border-none col-span-2 text-white bg-primary w-full"
          >
            Update Comfirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
