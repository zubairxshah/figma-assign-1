import FeaturePost from "./components/FeaturePost";
import HeroSection from "./components/Hero";
import RecentPost from "./components/Recentpost";
export default function Home() {
  return (
    <div>
   <HeroSection />
   <RecentPost />
   <FeaturePost />
    </div>
  );
}
