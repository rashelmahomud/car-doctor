import ServiceFecility from "@/components/card/ServiceFecility";
import { getServiceDetails } from "@/lib/getService";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const SearviceDetails = async ({ params }) => {
  const data = await getServiceDetails(params.id);

  const { title, img, price, description, facility } = data.service;
  return (
    <div className="container mx-auto">
      <div className="relative  my-10">
        <Image
          src={"/assets/images/banner/4.jpg"}
          alt="Sample Image"
          width={600}
          height={400}
          className=" w-full h-80 rounded"
        />

        <div className="absolute inset-0 bg-black opacity-60 rounded"></div>

        <div className="absolute inset-0 flex items-center ml-20 text-white">
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <div className="absolute inset-0 text-white flex place-items-end justify-center">
          <button className="bg-primary p-2 font-semibold rounded-t-lg">
            Home/Service Details
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2 my-5">
          <Image
            src={img}
            width={200}
            height={200}
            className="w-full h-60 rounded"
            alt="img"
          />
          <div>
            <h1 className="my-8 text-3xl font-bold">
              Unique Car Engine Service
            </h1>
            <p>{description}</p>
            <div>
              <div className="grid grid-cols-2 gap-5 rounded my-5">
                {facility.map((service) => (
                  <ServiceFecility key={service.name} service={service} />
                ))}
              </div>
              <div>
                <p className="my-5 text-gray-500">{description}</p>
                <h2 className="text-3xl font-bold">
                  3 Simple Steps to Process
                </h2>
                <p className="my-5 text-gray-500">{description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 my-3 gap-10">
                  <div className="text-center border rounded p-5 lg:py-10 py-5">
                    <div className="relative">
                      <h2 className="w-10 h-10 font-bold mx-auto place-content-center bg-primary text-white rounded-full">
                        01
                      </h2>
                      <div className="absolute inset-0 flex  items-center justify-center opacity-40">
                        <h1 className="w-16 h-16 bg-orange-300 rounded-full "></h1>
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl my-3">Step One</h3>
                    <p className="text-gray-400">
                      It uses a dictionary
                      <br /> <span>of over 200 .</span>
                    </p>
                  </div>
                  <div className="text-center border rounded p-5 lg:py-10 py-5">
                    <div className="relative">
                      <h2 className="w-10 h-10 font-bold mx-auto place-content-center bg-primary text-white rounded-full">
                        01
                      </h2>
                      <div className="absolute inset-0 flex  items-center justify-center opacity-40">
                        <h1 className="w-16 h-16 bg-orange-300 rounded-full "></h1>
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl my-3">Step One</h3>
                    <p className="text-gray-400">
                      It uses a dictionary
                      <br /> <span>of over 200 .</span>
                    </p>
                  </div>
                  <div className="text-center border rounded p-5 lg:py-10 py-5">
                    <div className="relative">
                      <h2 className="w-10 h-10 font-bold mx-auto place-content-center bg-primary text-white rounded-full">
                        01
                      </h2>
                      <div className="absolute inset-0 flex  items-center justify-center opacity-40">
                        <h1 className="w-16 h-16 bg-orange-300 rounded-full "></h1>
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl my-3">Step One</h3>
                    <p className="text-gray-400">
                      It uses a dictionary
                      <br /> <span>of over 200 .</span>
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src={"/assets/images/banner/5.jpg"}
                    alt="Sample Image"
                    width={600}
                    height={400}
                    className=" w-full h-80 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 p-8 my-5 rounded">
          <ul className="flex flex-col gap-3">
            <li className="text-2xl my-3 font-semibold">Services</li>
            <li className="flex justify-between btn hover:bg-primary hover:text-white border-none">
              <Link href="/">Full Car Repair</Link>
              <FontAwesomeIcon
                className="w-5 text-primary hover:text-white"
                icon={faArrowRight}
              />
            </li>
            <li className="flex justify-between btn hover:bg-primary hover:text-white border-none">
              <Link href="/">Battery Charge</Link>
              <FontAwesomeIcon
                className="w-5 text-primary"
                icon={faArrowRight}
              />
            </li>
            <li className="flex justify-between btn hover:bg-primary hover:text-white border-none">
              <Link href="/">Automatic Services</Link>
              <FontAwesomeIcon
                className="w-5 text-primary"
                icon={faArrowRight}
              />
            </li>
            <li className="flex justify-between btn hover:bg-primary hover:text-white border-none">
              <Link href="/">Engine Repair</Link>
              <FontAwesomeIcon
                className="w-5 text-primary"
                icon={faArrowRight}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearviceDetails;
