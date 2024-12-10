import { NavbarDemo } from "@/components/Navbar";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LayoutGridDemo } from "@/components/Layout";
import { BackgroundBeamsDemo } from "@/components/Newsletter";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials";


export default function Home() {
  return(
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <NavbarDemo />
      <HeroHighlightDemo />
      <BackgroundBeams />
      <LayoutGridDemo />
      <AnimatedTestimonialsDemo />
      <BackgroundBeamsDemo />

    </main>
  )
}

// SkillMedAI - name of the project

