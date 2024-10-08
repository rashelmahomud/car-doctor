export default function Banner() {
  const banners = [
    {
      next: "#slide2",
      prev: "#slide1",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      next: "#slide3",
      prev: "#slide2",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      next: "#slide4",
      prev: "#slide3",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      next: "#slide5",
      prev: "#slide4",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
    {
      next: "#slide6",
      prev: "#slide5",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    },
  ];

  return (
    <div className="container mx-auto mt-5">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-screen rounded"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(55,0,0,.8), rgba(0,0,0,0)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
          >
            <div className="place-content-center mx-auto ml-20 px-5">
              <h1 className="text-6xl font-bold text-white w-1/2">
                {banner.title}
              </h1>
              <p className="text-xl font-semibold text-white mt-3 w-1/2">
                {banner.description}
              </p>
              <div className="mt-10">
                <button className="btn text-white btn-primary mr-2">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-end gap-4">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a
                href={banner.next}
                className="btn btn-circle btn-primary text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
