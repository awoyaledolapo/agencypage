
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Markets from "@/components/Markets";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Markets/>
      <Testimonials/>
      <Gallery/>
    </div>
  );
}
