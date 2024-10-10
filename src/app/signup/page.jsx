"use client";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const handelSignUp = () => {};
  return (
    <div className="container mx-auto my-16 grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center">
      <div>
        <Image
          src={"/assets/images/login/login.svg"}
          width={320}
          height={320}
          alt="signup image"
        />
      </div>
      <div className="border-2 w-1/2 p-10 rounded">
        <h1 className="text-4xl font-semibold mb-5 text-center">SignUp</h1>
        <form onSubmit={handelSignUp}>
          <label className="font-semibold text-primary" htmlFor="name">
            Name:
          </label>
          <br />
          <input
            type="name"
            id="name"
            placefolder="Enter your name"
            className="input input-bordered w-full mb-3"
          />
          <label className="font-semibold text-primary" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            placefolder="Enter your Email"
            className="input input-bordered w-full"
          />
          <label className="font-semibold text-primary" htmlFor="password">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="password"
            placefolder="password"
            className="input input-bordered w-full"
          />
          <button
            type="submit"
            className="btn btn-primary w-full my-3 text-white font-semibold"
          >
            Singup
          </button>
          <div className="text-center">
            <Link href="/login" className="font-semibold text-primary">
              Have a Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
