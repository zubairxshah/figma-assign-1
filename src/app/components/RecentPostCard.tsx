import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });
function RecentPostCard(){
    return (
        <div>
            <div className="w[100%] md:w-[483px] h-[356px] bg-white flex items-center">
          <div className="m-auto w[100%] md:w-[391px] h-[286px] bg-white p-1 flex flex-col items-start justify-between">
          <h2 className={`${heebo.className} font-bold text-[26px]`}>
            Making a design system from scratch
          </h2>
          <div className="w-[301.28px] h-[42.12px] flex items-center justify-between divide-x-1 divide-black/70">
            <p
              className={`${heebo.className} font-normal text-[18px] text-black/70`}
            >
              12 Feb 2020
            </p>
            <div className="h-[17.5px]  border-r-2 border-black items-center justify-center" />
            <p
              className={`${heebo.className} font-normal text-[18px] text-black/70`}
            >
              Design, Pattern
            </p>
          </div>
          <p
            className={`${heebo.className} w-[391] h-[192.7] font-normal text-[16px]`}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
        </div>
    )
}

export default RecentPostCard