export default function CustomerSay() {
  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <span className="font-semibold">Testimonial</span>
        <h2 className="text-4xl font-bold">What Customer Say</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised
          <br /> words which don't look even slightly believable.
        </p>
      </div>
      <div className="my-10">
        <div className="carousel w-full">
          <div id="item1" className="flex justify-between carousel-item w-full">
            <div>
              <h1>Awlad Hossain</h1>
              <h2> Businessman</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <div>
              <h1>Awlad Hossain</h1>
              <h2> Businessman</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
}
