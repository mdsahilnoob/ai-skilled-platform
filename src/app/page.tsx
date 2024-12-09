import { NavbarDemo } from "@/components/Navbar";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Home() {
  return(
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <NavbarDemo />
      <HeroHighlightDemo />
      <BackgroundBeams />
    </main>
  )
}
