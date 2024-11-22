import { Heebo } from "next/font/google"
import Image from "next/image"

const heebo = Heebo({subsets:["latin"], weight:["900","300","700"]})

export default function HeroSection(){
    return(
        <div className="my-[66px] md:w-[1030px] md:h-[308px] 
         flex flex-col-reverse md:flex-row mx-auto items-center justify-between p-6">
            {/* Text Div */}
            <div className="w-[96%] md:w-[521px] h-[305px] flex flex-col items-start md:justify-between 
            justify-evenly">
                <h1 className={`${heebo.className} text-[20px] md:text-[48px] font-black text-myBlack`}>
                    Hi, I am John, <br></br>
                    Creative Technologist
                </h1>
                <p className={`${heebo.className} text-myBlack font-normal text-[16px]`}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam 
                    consequat sunt nostrud amet.
                </p>
                <button className={`${heebo.className} bg-myPink text-white px-4 py-2 w-[205] h-[50] 
                font-regular rounded-[2px] text-[18px] shadow-md shadow-shadowButton/60`}>
                    Download Resume
                </button>
            </div>

            {/* Image Div */}
            <div className="relative w-[292px] h-[299px] mb-8 md:mb-0">
                <div className="absolute top-2 right-2 w-[292px] h-[299px] rounded-full bg-heroElipse" />
                <div className="relative z-10">
                    <Image 
                        src="/figma/image.png" 
                        alt="profile image" 
                        width={292} 
                        height={299} 
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
