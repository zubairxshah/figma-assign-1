import { Heebo } from "next/font/google";
import Image from "next/image";
import FeaturePostCard from "./FeaturePostCard";
const heebo = Heebo({ subsets: ["latin"] });

export default function FeaturePost() {
  return (
    <div className="w-[919px] mx-auto p-6">
      <h2 className={`${heebo.className} text-[22px] font-medium mb-8`}>
        Featured works
      </h2>
      
      <div className="flex flex-col gap-12">
        {/* First Feature Item */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-[246px] h-[180px] flex-shrink-0">
            <Image
              src="/figma/feature-01.png"
              alt="Featured Image"
              width={246}
              height={180}
              className="object-cover"
            />
          </div>
          <div className="flex-grow relative bottom-2">
            <FeaturePostCard />
          </div>
        </div>

        {/* Second Feature Item */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-[246px] h-[180px] flex-shrink-0">
            <Image
              src="/figma/feature-02.png"
              alt="Featured Image"
              width={246}
              height={180}
              className="object-cover"
            />
          </div>
          <div className="flex-grow relative bottom-2">
            <FeaturePostCard />
          </div>
        </div>

        {/* Third Feature Item */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-[246px] h-[180px] flex-shrink-0">
            <Image
              src="/figma/feature-03.png"
              alt="Featured Image"
              width={246}
              height={180}
              className="object-cover"
            />
          </div>
          <div className="flex-grow relative bottom-2">
            <FeaturePostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
