import {
  faCalendarDays,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OpenTime() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 bg-black text-white lg:p-10 lg:my-10 rounded justify-items-center ">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon className="w-8 text-primary" icon={faCalendarDays} />
        <div>
          <h3>We are open monday-friday</h3>
          <span className="text-2xl font-bold">7:00 am - 9:00 pm</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon className="w-8 text-primary" icon={faPhoneVolume} />
        <div>
          <h3> Have a question?</h3>
          <span className="text-2xl font-bold">+2546 251 2658</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon className="w-8 text-primary" icon={faLocationDot} />
        <div>
          <h3>Need a repair? our address</h3>
          <span className="text-2xl font-bold">Liza Street, New York</span>
        </div>
      </div>
    </div>
  );
}
