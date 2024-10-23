"use client";
import { getServiceDetails } from "@/lib/getService";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const { default: Image } = require("next/image");

// const metadata = {
//   title: "service checkout",
//   description: "car-doctor checkout details",
// };

const CheckoutPage = async ({ params }) => {
  const { data } = useSession();
  // const [service, setService] = useState({});

  // const loadService = async () => {
  const details = await getServiceDetails(params.id);

  // setService(details.service);
  // };
  const { _id, title, img, price } = details.service || {};

  const handelBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      serviceTitle: title,
      serviceID: _id,
      servicePrice: price,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/api/new-booking`,
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: { "content-type": "application/json" },
      }
    );
    if (res.ok) {
      toast.success("successfull booking your product");
      event.target.reset();
    } else {
      toast.error("have some issu for this booking");
    }
  };

  // useEffect(() => {
  //   loadService();
  // }, [params]);
  return (
    <div className="container mx-auto my-10">
      <div className="relative">
        <Image
          src={img}
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
          onSubmit={handelBooking}
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
            defaultValue={price}
            name="price"
            disabled
            className="bg-white px-5 border-none rounded py-3"
            placeholder="Due amaunt"
          />
          <input
            type="phone"
            name="phone"
            className="bg-white px-5 border-none rounded py-3"
            placeholder="phone:"
          />
          <input
            type="address"
            name="address"
            className="bg-white px-5 border-none rounded py-3"
            placeholder="current address:"
          />

          <button
            type="submit"
            className="btn border-none col-span-2 text-white bg-primary w-full"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
