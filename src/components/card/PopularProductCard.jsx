import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function PopularProductCard({ service }) {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-8 pt-8">
        <Image
          className="rounded"
          src={img}
          width={420}
          height={200}
          alt="card"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex gap-1">
          <FontAwesomeIcon className="w-5 text-yellow-500" icon={faStar} />
          <FontAwesomeIcon className="w-5 text-yellow-500" icon={faStar} />
          <FontAwesomeIcon className="w-5 text-yellow-500" icon={faStar} />
          <FontAwesomeIcon className="w-5 text-yellow-500" icon={faStar} />
          <FontAwesomeIcon className="w-5 text-yellow-500" icon={faStar} />
        </div>

        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="card-actions">
          <span className="text-primary font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
}
