"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Bookingpage = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);

  const loadBooking = async () => {
    const res = await fetch(
      `http://localhost:3000/my-booking/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    setBookings(data.bookings);
  };

  useEffect(() => {
    loadBooking();
  }, [session]);

  return (
    <div className="container mx-auto">
      <div className="relative  my-10">
        <Image
          src={"/assets/images/about_us/parts.jpg"}
          alt="Sample Image"
          width={600}
          height={400}
          className=" w-full h-80 rounded"
        />

        <div className="absolute inset-0 bg-black opacity-60 rounded"></div>

        <div className="absolute inset-0 flex items-center ml-20 text-white">
          <h2 className="text-3xl font-bold">
            Welcome from <span className="text-primary">Car Doctor</span>
          </h2>
        </div>
      </div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Customer Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map(
              ({ servicePrice, serviceTitle, email, _id, name }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{name}</td>
                  <td>{serviceTitle}</td>
                  <td>{servicePrice}</td>
                  <td>{email}</td>
                  <td>
                    <div className="flex items-center gap-3 mx-3">
                      <Link href="/edit">
                        <button className="btn bg-green-700 border-none text-white font-semibold">
                          Edit
                        </button>
                      </Link>
                      <Link href="/delete">
                        <button className="btn bg-red-700 border-none text-white font-semibold">
                          Delete
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookingpage;
