"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignin from "@/components/shared/SocialSignin";

export default function LoginPage() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    if (resp.ok) {
      toast.success("successfully joined..");
    } else {
      toast.error("have a some issus error");
    }
    if (resp.status === 200) {
      e.target.reset();

      router.push("/");
    }

    return resp;
  };

  return (
    <div className="container mx-auto my-16 grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center">
      <div>
        <Image
          src={"/assets/images/login/login.svg"}
          width={320}
          height={320}
          alt="simple image"
        />
      </div>
      <div className="border-2 w-1/2 p-10 rounded">
        <h1 className="text-4xl font-semibold mb-5 text-center">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-primary font-semibold">
            Email:
          </label>
          <br />
          <input
            type="email"
            className="input input-bordered w-full mb-4"
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password" className="text-primary font-semibold">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="input input-bordered w-full"
          />
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold mt-4"
          >
            Submit
          </button>
          <SocialSignin />
          <div>
            <Link href="/signup" className="text-center text-primary">
              Regestart Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
