import About from "@/components/about/About";
import Eyes from "@/components/eyes/Eyes";
import Landing from "@/components/landing/Landing";
import Marquee from "@/components/marquee/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 w-full h-screen text-white">
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
    </main>
  );
}
