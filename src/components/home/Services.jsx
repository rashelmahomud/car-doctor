import CardServices from "../card/CardServices";

import { services } from "../../lib/services";

const Services = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-primary text-xl font-semibold">Service</span>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <h6>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </h6>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  place-items-center my-10">
        {services.map((service) => (
          <CardServices service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
