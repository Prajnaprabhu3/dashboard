import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import avatar from "../pages/assets/user.png";

import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={`flex items-center justify-between p-4 max-w-full mx-auto drop-shadow-md bg-white ${styles.headerWrapper}`}>
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center justify-between mr-10 mt-2 text-gray-700">
        <div className="flex items-center space-x-8 text-gray-700 text-2xl mr-16 pr-4">
          <BiSearch />
          <IoNotificationsSharp />
        </div>

        <div className="flex justify-between  ">
          <Image
            src={avatar}
            alt="Picture of the author"
            width={22}
            height={22}
          />

          <RiArrowDropDownLine className="text-2xl ml-2 text-gray-700 " />
        </div>
      </div>
    </header>
  );
};

export default Header;
