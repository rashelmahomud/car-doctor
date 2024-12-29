import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function CustomerSay() {
  return (
    <div className="container mx-auto lg:p-10 p-3">
      <div className="text-center">
        <span className="font-semibold">Testimonial</span>
        <h2 className="text-4xl font-bold">What Customer Say</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised
          <br /> words which don  t look even slightly believable.
        </p>
      </div>
      <div className="my-10">
        <div className="carousel w-full">
          <div
            id="item1"
            className="flex justify-between lg:gap-28 gap-5 carousel-item w-full lg:p-10"
          >
            <div>
              <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <Image
                      height={200}
                      width={200}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <h1>Md Rashel</h1>
                  <h2> Software Enginear</h2>
                </div>
                <Image
                  className="opacity-5 "
                  width={60}
                  height={12}
                  src={"/assets/icons/quote.svg"}
                  alt="logo"
                />
              </div>
              <p className="my-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don t look even
                slightly believable.
              </p>
              <div className="flex gap-1">
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <Image
                        height={120}
                        width={200}
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <h1>Awlad Hossain</h1>
                    <h2> Businessman</h2>
                  </div>
                  <Image
                    className="opacity-5 "
                    width={60}
                    height={12}
                    src={"/assets/icons/quote.svg"}
                    alt="logo"
                  />
                </div>
                <p className="my-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don t look
                  even slightly believable.
                </p>
                <div className="flex gap-1">
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            id="item2"
            className="flex justify-between lg:gap-28 gap-5 carousel-item w-full lg:p-10"
          >
            <div>
              <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <Image
                      height={120}
                      width={200}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <h1>Awlad Hossain</h1>
                  <h2> Businessman</h2>
                </div>
                <Image
                  className="opacity-5 "
                  width={60}
                  height={12}
                  src={"/assets/icons/quote.svg"}
                  alt="logo"
                />
              </div>
              <p className="my-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don t look even
                slightly believable.
              </p>
              <div className="flex gap-1">
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <Image
                        height={120}
                        width={200}
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <h1>Awlad Hossain</h1>
                    <h2> Businessman</h2>
                  </div>
                  <Image
                    className="opacity-5 "
                    width={60}
                    height={12}
                    src={"/assets/icons/quote.svg"}
                    alt="logo"
                  />
                </div>
                <p className="my-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don t look
                  even slightly believable.
                </p>
                <div className="flex gap-1">
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            id="item3"
            className="flex justify-between lg:gap-28 gap-5 carousel-item w-full lg:p-10"
          >
            <div>
              <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <Image
                      height={120}
                      width={200}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <h1>Awlad Hossain</h1>
                  <h2> Businessman</h2>
                </div>
                <Image
                  className="opacity-5 "
                  width={60}
                  height={12}
                  src={"/assets/icons/quote.svg"}
                  alt="logo"
                />
              </div>
              <p className="my-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don t look even
                slightly believable.
              </p>
              <div className="flex gap-1">
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <Image
                        height={120}
                        width={200}
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <h1>Tamanna Khanom</h1>
                    <h2> Businessman</h2>
                  </div>
                  <Image
                    className="opacity-5 "
                    width={60}
                    height={12}
                    src={"/assets/icons/quote.svg"}
                    alt="logo"
                  />
                </div>
                <p className="my-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don t look
                  even slightly believable.
                </p>
                <div className="flex gap-1">
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            id="item4"
            className="flex justify-between lg:gap-28 gap-5 carousel-item w-full lg:p-10"
          >
            <div>
              <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <Image
                      height={120}
                      width={200}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <h1>Towhida Khanom</h1>
                  <h2> Businessman</h2>
                </div>
                <Image
                  className="opacity-5 "
                  width={60}
                  height={12}
                  src={"/assets/icons/quote.svg"}
                  alt="logo"
                />
              </div>
              <p className="my-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don t look even
                slightly believable.
              </p>
              <div className="flex gap-1">
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 text-yellow-500"
                  icon={faStar}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-items-center gap-5 lg:p-5 p-3">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <Image
                        height={120}
                        width={200}
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div>
                    <h1>Rashel mahomud</h1>
                    <h2> Businessman</h2>
                  </div>
                  <Image
                    className="opacity-5 "
                    width={60}
                    height={12}
                    src={"/assets/icons/quote.svg"}
                    alt="logo"
                  />
                </div>
                <p className="my-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don t look
                  even slightly believable.
                </p>
                <div className="flex gap-1">
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="w-5 text-yellow-500"
                    icon={faStar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <Link href="#item1" className="btn btn-xs">
            1
          </Link>
          <Link href="#item2" className="btn btn-xs">
            2
          </Link>
          <Link href="#item3" className="btn btn-xs">
            3
          </Link>
          <Link href="#item4" className="btn btn-xs">
            4
          </Link>
        </div>
      </div>
    </div>
  );
}
