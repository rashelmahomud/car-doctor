import { getServiceDetails } from "@/lib/getService";

const { default: Image } = require("next/image");

export const metadata = {
  title: "service checkout",
  description: "car-doctor checkout details",
};

const CheckoutPage = async ({ params }) => {
  const data = await getServiceDetails(params.id);

  const { _id, title, img, price, description, facility } = data.service;
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mx-20   bg-gray-400 rounded mt-10 lg:p-24 p-3">
        <input
          type="text"
          className="bg-white px-5 border-none rounded py-3  items-end"
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-white px-5 border-none rounded py-3 "
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-white px-5 border-none rounded py-3"
          placeholder="First Name"
        />
        <input
          type="text"
          className="bg-white px-5 border-none rounded py-3"
          placeholder="First Name"
        />
        <textarea
          className="textarea textarea-bordered col-span-2"
          placeholder="your taxt"
        ></textarea>
        <button className="btn border-none col-span-2 text-white bg-primary w-full">
          Order Confirm
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
