import { NavbarDemo } from "@/components/Navbar";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Home() {
  return(
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <NavbarDemo />
      <HeroHighlight />
      <BackgroundBeams />
    </main>
  )
}
