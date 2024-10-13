import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

const SocialSignIn = () => {
  const handelSocialLogin = async (provider) => {
    const resp = signIn(provider);
  };
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

export default SocialSignIn;
