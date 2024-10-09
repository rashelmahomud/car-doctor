import PopularProductCard from "../card/PopularProductCard";

import { services } from "../../lib/services";

export default function PopularProduct() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <span className="text-primary text-xl font-semibold">
          Popular Products
        </span>
        <h1 className="lg:text-4xl font-bold my-3">Browse Our Products</h1>
        <h6 className="font-semibold text-gray-500 p-2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </h6>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-5 justify-items-center">
        {services.map((service) => (
          <PopularProductCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-outline btn-primary">More Products</button>
      </div>
    </div>
  );
}
