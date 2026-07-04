import { Hero } from "@/components/sections/home/hero";
import { Impact } from "@/components/sections/home/impact";
import { Expertise } from "@/components/sections/home/expertise";
import { FeaturedProducts } from "@/components/sections/home/featured-products";
import { Solutions } from "@/components/sections/home/solutions";
import { Timeline } from "@/components/sections/home/timeline";
import { Research } from "@/components/sections/home/research";
import { Manufacturing } from "@/components/sections/home/manufacturing";
import { SportsPreview } from "@/components/sections/home/sports-preview";
import { Stats } from "@/components/sections/home/stats";
import { CtaBand } from "@/components/site/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Expertise />
      <FeaturedProducts />
      <Solutions />
      <Timeline />
      <Research />
      <Manufacturing />
      <SportsPreview />
      <Stats />
      <CtaBand />
    </>
  );
}
