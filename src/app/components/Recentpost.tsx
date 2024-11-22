import { Heebo } from "next/font/google";
import Link from "next/link";
import RecentPostCard from "./RecentPostCard";

const heebo = Heebo({ subsets: ["latin"] });

export default function RecentPost() {
  return (
    <div className="bg-recentBackground my-[66px] flex flex-col justify-evenly">
      <div className="w-[92%] md:w-[1030px] p-6 mx-auto flex flex-col justify-between">
        <div className="flex flex-row justify-between">
        <h2 className={`${heebo.className} font-medium text-[22px]`}>
          Recent Post
        </h2>
        <Link
          href="#"
          className={`${heebo.className} font-medium text-[22px]
                 text-myPink`}
        >
          View all
        </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-[16px] gap-4">
            <RecentPostCard />
            <RecentPostCard />
        </div>
      </div>
      
    </div>
  );
}
