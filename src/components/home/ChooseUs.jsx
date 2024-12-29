import Image from "next/image";
import Link from "next/link";

export default function ChooseUs() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <span className="font-semibold">Core Features</span>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-6 place-items-center my-5  gap-6">
        <Link href="#">
          <div className="border  rounded w-40 h-40 p-4 text-center box-content hover:bg-primary hover:text-white transition-all">
            <Image
              src={"/assets/icons/group.svg"}
              width={200}
              height={22}
              alt="logo"
            />
            <h2 className="text-sx font-semibold">24/7 Support</h2>
          </div>
        </Link>
        <Link href="#" className="btn-outline btn-primary rounded">
          <div className="border rounded w-40 h-40 p-4 text-center box-content hover:bg-primary hover:text-white transition-all">
            <Image
              className="mx-auto"
              src={"/assets/icons/check.svg"}
              width={100}
              height={22}
              alt="logo"
            />
            <h2 className="text-sx font-semibold">100% Guranty</h2>
          </div>
        </Link>

        <div className="border rounded w-40 h-40 p-4 text-center box-content hover:bg-primary hover:text-white transition-all">
          <Image
            className="mx-auto"
            src={"/assets/icons/quote.svg"}
            width={100}
            height={22}
            alt="logo"
          />
          <h2 className="text-sx font-semibold">24/7 Support</h2>
        </div>

        <div className="border rounded w-40 h-40 p-4 text-center box-content hover:bg-primary hover:text-white transition-all">
          <Image
            className="mx-auto"
            src={"/assets/icons/Wrench.svg"}
            width={100}
            height={22}
            alt="logo"
          />
          <h2 className="text-sx font-semibold">24/7 Support</h2>
        </div>

        <div className="border rounded w-40 h-40 p-4 text-center box-content hover:bg-primary hover:text-white transition-all">
          <Image
            className="mx-auto"
            src={"/assets/icons/group.svg"}
            width={100}
            height={22}
            alt="logo"
          />
          <h2 className="text-sx font-semibold">24/7 Support</h2>
        </div>
        <div className="border rounded w-40 h-40 p-4 text-center box-content hover:bg-primary hover:text-white transition-all">
          <Image
            className="mx-auto"
            src={"/assets/icons/deliveryt.svg"}
            width={100}
            height={22}
            alt="logo"
          />
          <h2 className="text-sx font-semibold">Timely Delivery</h2>
        </div>
      </div>
    </div>
  );
}
