import { Heebo } from "next/font/google";

const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function FeaturePostCard(){
    return(
        <div
          className="w-[96%] md:w-[623.46px] h-[272.1px] flex flex-col md:items-start md:justify-center 
        justify-right"
        >
          <h1 className={`${heebo.className} text-[30px] font-bold text-black`}>
            Designing Dashboards
          </h1>

          <div className="flex items-center gap-8 mt-[12px]">
            <p
              className={`${heebo.className} text-center text-[18px] font-bold 
        text-white w-[68px] h-[24px] bg-myPink
        rounded-[50px] flex items-center justify-center`}
            >
              2020
            </p>
            <p
              className={`${heebo.className} text-black/65
        font-normal text-[20px]`}
            >
              Dashboard
            </p>
          </div>
          <div className="w-[70%] md:w-[622px] md:h-[170px] py-4">
            <p
              className={`${heebo.className} text-left text-[18px] font-light text-black`}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
    )
}