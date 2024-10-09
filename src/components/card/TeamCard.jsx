import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TeamCard = () => {
  return (
    <div className="card bg-base-100 w-96 border">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex card-actions">
          <FontAwesomeIcon className="w-5" icon={faLinkedin} />
          <FontAwesomeIcon className="w-5 " icon={faSquareInstagram} />
          <FontAwesomeIcon className="w-5" icon={faInstagram} />
          <FontAwesomeIcon className="w-5 " icon={faFacebook} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
