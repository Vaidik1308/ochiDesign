import Carousel from "@/components/Carousel/Carousel";
import About from "@/components/about/About";
import Eyes from "@/components/eyes/Eyes";
import Featured from "@/components/featturedProject/Featured";
import Landing from "@/components/landing/Landing";
import Marquee from "@/components/marquee/Marquee";

export default function Home() {
  return (
    <main className="bg-zinc-900 w-full h-screen text-white">
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Carousel/>
    </main>
  );
}
