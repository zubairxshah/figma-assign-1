import { Inter } from "next/font/google";
import Link from "next/link";

// Font Inter
const inter = Inter({ subsets: ["latin"] });

export default function NavBar() {
  // Navbar items in an array
  const navItems = [
    {
      name: "Works",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];
  return (
    <>
      <ul
        className={`${inter.className} m-[66px] flex items-center justify-end h-[24px] font-medium text-[20px]
             space-x-[56px]`}
      >
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        </ul>
    </>
  );
}
