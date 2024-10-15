import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const CardServices = ({ service }) => {
  const { title, img, price, _id } = service;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image
          className="rounded"
          width={320}
          height={30}
          src={img}
          alt="card image"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-3xl font-bold">{title}</h2>

        <div className="card-actions text-primary items-center justify-between">
          <div className="  text-2xl font-semibold">Price: ${price}</div>

          <div className="justify-end">
            <Link href={`/services/${_id}`}>
              <FontAwesomeIcon className="w-5 " icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
