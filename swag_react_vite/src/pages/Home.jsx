import Hero from "../components/Hero";
import MagicBento from "../components/MagicBento";
import { HeroProvider } from "../context/HeroProvider";
import FeaturedDrip from "../components/FeaturedDrip";
import CTAJoin from "../components/CTAJoin";
import LatestBlogPreview from "../components/LatestBlogPreview";

export default function Home() {
  return (
    <HeroProvider>
      <Hero />
      <MagicBento />
      <FeaturedDrip />
      <CTAJoin />
      <LatestBlogPreview />
    </HeroProvider>
  );
}