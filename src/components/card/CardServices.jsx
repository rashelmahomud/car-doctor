import Image from "next/image";

const CardServices = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image width={320} height={30} src={img} alt="card image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
