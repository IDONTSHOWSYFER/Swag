import Hero from "../components/Hero";
import MagicBento from "../components/MagicBento";
import FeaturedDrip from "../components/FeaturedDrip";
import CTAJoin from "../components/CTAJoin";
import LatestBlogPreview from "../components/LatestBlogPreview";

export default function Home() {
    return (
        <>
            <Hero/>
            <MagicBento/>
            <FeaturedDrip/>
            <CTAJoin/>
            <LatestBlogPreview/>
        </>
    );
}