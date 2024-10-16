import ServiceFecility from "@/components/card/ServiceFecility";
import { getServiceDetails } from "@/lib/getService";
import { faArrowRight, faFilePdf } from "@fortawesome/free-solid-svg-icons";
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
        <div className="">
          <div className="p-8 my-5 rounded bg-gray-200">
            <ul className="flex flex-col gap-3 ">
              <li className="text-2xl my-3 font-semibold">Services</li>
              <li className="flex justify-between btn  bg-primary text-white border-none">
                <Link href="/">Full Car Repair</Link>
                <FontAwesomeIcon
                  className="w-5 text-white"
                  icon={faArrowRight}
                />
              </li>
              <li className="flex justify-between btn bg-white hover:bg-primary hover:text-white border-none">
                <Link href="/">Battery Charge</Link>
                <FontAwesomeIcon
                  className="w-5 text-primary"
                  icon={faArrowRight}
                />
              </li>
              <li className="flex justify-between btn bg-white hover:bg-primary hover:text-white border-none">
                <Link href="/">Automatic Services</Link>
                <FontAwesomeIcon
                  className="w-5 text-primary"
                  icon={faArrowRight}
                />
              </li>
              <li className="flex justify-between btn bg-white hover:bg-primary hover:text-white border-none">
                <Link href="/">Engine Repair</Link>
                <FontAwesomeIcon
                  className="w-5 text-primary"
                  icon={faArrowRight}
                />
              </li>
            </ul>
          </div>
          <div className="my-5 bg-black text-white rounded p-5">
            <h1 className="text-2xl font-bold">Download</h1>
            <div className="flex justify-between my-5">
              <div className="flex justify-center items-center gap-3">
                <FontAwesomeIcon
                  className="w-5 text-primary"
                  icon={faFilePdf}
                />
                <h1 className="font-semibold">
                  Our Brochure <br />{" "}
                  <span className="text-gray-400 font-normal">Download</span>
                </h1>
              </div>
              <FontAwesomeIcon
                className="w-5 border-none btn bg-primary text-white"
                icon={faArrowRight}
              />
            </div>
            <div className="flex justify-between my-5">
              <div className="flex justify-center items-center gap-3">
                <FontAwesomeIcon
                  className="w-5 text-primary"
                  icon={faFilePdf}
                />
                <h1 className="font-semibold">
                  Our Brochure <br />{" "}
                  <span className="text-gray-400 font-normal">Download</span>
                </h1>
              </div>
              <FontAwesomeIcon
                className="w-5 border-none btn bg-primary text-white"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="my-5 bg-black text-white rounded p-5">
            <div className="text-center mx-auto">
              <aside>
                <Image
                  height="11"
                  width="11"
                  className="w-24 mx-auto my-3 "
                  src="/assets/logo.svg"
                  alt="logo"
                />
              </aside>
              <p>
                Need Help? We Are Here <br /> To Help You
              </p>
            </div>
            <div className="bg-white relative text-black p-5 m-10 rounded text-center">
              <h3 className="text-primary font-bold">
                Car Doctor <span className="text-black font-bold">Special</span>
              </h3>
              <h3 className="text-gray-500 font-bold my-3">
                Save up to
                <span className="text-primary font-bold"> 60% off</span>
              </h3>
            </div>
            <button className="btn bg-primary border-none text-white absolute -mt-16 ml-40">
              Get a Quote
            </button>
          </div>
          <div>
            <h2 className="font-semibold text-2xl my-3">Price ${price}</h2>
            <Link href="/checkout">
              <button className="btn bg-primary w-full text-white font-semibold">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearviceDetails;
