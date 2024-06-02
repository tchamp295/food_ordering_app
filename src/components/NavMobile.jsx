import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";

const NavMobile = ({ closeNav, showNav }) => {
  const navOpenStyles = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="">
      <div
        className={`fixed  top-0 transform ${navOpenStyles} transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh] `}
      ></div>

      <ul
        className={`text-white fixed  ${navOpenStyles} flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[80%] bg-gray-100 space-y-14 z-[10006] `}
      >
        <div className="flex gap-5 items-center">
          <Link
            className="text-black bg-orange-500 rounded-md py-1 px-6"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="text-black bg-orange-500 rounded-md py-1 px-6"
            href="/signup"
          >
            Sign up
          </Link>
        </div>
        <li>
          <Link href={"/"} className="nav_link text-red-600">
            {" "}
            Home
          </Link>
        </li>
        <li>
          <a className="nav_link" href="#">
            Menu
          </a>
        </li>
        <li>
          <a className="nav_link" href="#">
            Contact
          </a>
        </li>

        <RiCloseFill
          onClick={closeNav}
          className="absolute top-[-2.5rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-black"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
