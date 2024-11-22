import { Heebo } from "next/font/google";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const heeebo = Heebo({ subsets: ["latin"] });
export default function Footer() {
  return (
    <div className="h-[243px] bg-footerBackground flex flex-col items-center justify-center space-y-6">
      <div className="text-[#21243D] flex space-x-[55px]">
        <Link href={""}>
          <FaFacebookSquare className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaInstagram className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaTwitter className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaLinkedin className="w-[30px] h-[30px]" />
        </Link>
      </div>
      <p className={` ${heeebo.className} text-center font-medium text-[22px]`}>
        Copyright ©2020 All rights reserved{" "}
      </p>
    </div>
  );
}
