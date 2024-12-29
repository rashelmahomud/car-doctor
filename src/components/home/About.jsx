import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:py-20 py-3 lg:my-10 my-3">
        <div className="flex gap-2 lg:gap-6 place-content-center">
          <Image
            className="w-1/2 h-full rounded "
            width={500}
            height={500}
            src="/assets/images/about_us/person.jpg"
            alt="about section pic"
          />

          <Image
            className=" lg:mt-24 -ml-52 -mb-16 rounded border-8 border-white"
            width={300}
            height={100}
            src="/assets/images/about_us/parts.jpg"
            alt="about section pic"
          />
        </div>
        <div className="lg:pr-44 p-3">
          <span className="font-semibold text-primary">About Us</span>
          <h1 className="lg:text-5xl font-bold my-5 ">
            We are qualified <br /> & of experience <br /> in this field
          </h1>

          <p className="text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable.
          </p>
          <p className="my-4 text-gray-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don t look even slightly
            believable.
          </p>
          <button className="btn btn-primary text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
