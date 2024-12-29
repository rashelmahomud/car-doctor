"use client";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SocialSignin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const { status } = useSession();
  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <div className="flex lg:space-x-10 justify-center items-center gap-3 p-3 ">
      <FontAwesomeIcon
        onClick={() => handleSocialLogin("google")}
        className="w-5 btn btn-outline"
        icon={faGoogle}
      />
      <FontAwesomeIcon
        onClick={() => handleSocialLogin("github")}
        className="w-5 btn btn-outline"
        icon={faGithub}
      />
      <FontAwesomeIcon className="w-5 btn btn-outline" icon={faLinkedin} />
    </div>
  );
};

export default SocialSignin;
