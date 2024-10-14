import CardServices from "../card/CardServices";

const getServices = async () => {
  const res = await fetch("http://localhost:3000/searvices/api/get-all");
  const data = await res.json();
  return data;
};
const Services = async () => {
  const data = await getServices();
  const { service } = data;

  return (
    <div className="my-5">
      <div className="text-center">
        <div>
          <span className="text-primary text-xl font-semibold">Service</span>
          <h1 className="lg:text-4xl font-bold my-3">Our Service Area</h1>
          <h6 className="font-semibold text-gray-500 p-2">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which don't look even slightly
            believable.
          </h6>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6  gap-2 place-items-center my-10">
          {service?.length > 0 &&
            service?.map((service) => <CardServices service={service} />)}
        </div>
        <div className="">
          <button className="btn btn-outline btn-primary">More Service</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
