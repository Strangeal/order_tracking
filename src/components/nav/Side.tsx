import { TbMoneybag } from "react-icons/tb";
import { PiApplePodcastsLogoFill, PiUsersLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { BsExclamationCircle, BsHandbag } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

import "../../styles/nav.css";
import { Link } from "react-router-dom";

type MenuProps = {
  menu: any;
};

const Side = ({ menu }: MenuProps) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <Link to="/" className="flex ml-2 pt-5 pb-5">
          {" "}
          {/* md:mr-24 */}
          <PiApplePodcastsLogoFill className="h-8 mr-3 text-3xl text-orange-400" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            Order Tracker
          </span>
        </Link>
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/" className="side_nav_link">
                <RxDashboard className="side_icon" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/orders" className="side_nav_link">
                <BsExclamationCircle className="side_icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Reports</span>
              </Link>
            </li>
            <li>
              <Link to="/orders" className="side_nav_link">
                <BsHandbag className="side_icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="side_nav_link">
                <FaRegStar className="side_icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Features</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="side_nav_link">
                <TbMoneybag className="side_icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Pricing</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="side_nav_link">
                <PiUsersLight className="side_icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Side;
