import CardServices from "../card/CardServices";

import { services } from "../../lib/services";

const Services = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-primary text-xl font-semibold">Service</span>
        <h1 className="lg:text-4xl font-bold my-3">Our Service Area</h1>
        <h6 className="font-semibold text-gray-500 p-2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </h6>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6  gap-2 place-items-center my-10">
        {services.map((service) => (
          <CardServices service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
