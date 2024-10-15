import { getServiceDetails } from "@/lib/getService";
import Image from "next/image";

const SearviceDetails = async ({ params }) => {
  const data = await getServiceDetails(params.id);

  const { title, img, price } = data.service;

  return (
    <div>
      <p className="text-5xl text-red-600">{title}</p>
      <p className="text-5xl text-red-600">{price}</p>
      <Image src={img} width={200} height={200} alt="img" />
      <h1>hello details</h1>
    </div>
  );
};

export default SearviceDetails;
