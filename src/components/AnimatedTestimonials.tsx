'use client'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "As a student, I struggled with understanding practical healthcare scenarios. The interactive modules and assessments provided clarity and helped me excel in my coursework. I highly recommend it to all aspiring healthcare professionals.",
      name: "Sarah Chen",
      designation: "Medical Student",
      src: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The gamified elements kept me motivated while I learned advanced surgical techniques. The progress tracker gave me a clear view of my achievements, pushing me to aim higher every day.",
      name: "Dr. Ahmed Al-Mohammed",
      designation: "Surgeon",
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This platform prepared me to tackle public health emergencies effectively. The pandemic readiness modules were insightful and practical, making me feel confident during critical times.",
      name: "Mohammad Sahil",
      designation: "Telemedicine Specialist",
      src: "https://images.unsplash.com/photo-1579684453401-966b11832744?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The role-specific training tailored to geriatric care addressed my exact needs. It has made me more competent and empathetic in managing elderly patients. I owe my improved care skills to this platform.",
      name: "Emily Watson",
      designation: "Geriatric Care Nurse",
      src: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This platform is a game-changer! The personalized learning paths helped me brush up on telemedicine skills, making me confident to provide quality care remotely. I now feel equipped to serve my patients better than ever.",
      name: "Eben Kassaye",
      designation: "General Practitioner",
      src: "https://images.unsplash.com/photo-1643297654399-5da3409e302a?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
