"use client";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SocialSignin = () => {
  const router = useRouter();
  const { status } = useSession();
  const handelSocialLogin = async (provider) => {
    const resp = signIn(provider);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <div className="flex lg:space-x-10 justify-center items-center gap-3 p-3 ">
      <FontAwesomeIcon
        onClick={() => handelSocialLogin("google")}
        className="w-5 btn btn-outline"
        icon={faGoogle}
      />
      <FontAwesomeIcon
        onClick={() => handelSocialLogin("github")}
        className="w-5 btn btn-outline"
        icon={faGithub}
      />
      <FontAwesomeIcon className="w-5 btn btn-outline" icon={faLinkedin} />
    </div>
  );
};

export default SocialSignin;
