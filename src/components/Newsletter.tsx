"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join SkillMed
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Medical students should join SkillMed to gain hands-on, AI-powered training tailored to
         their future careers. With personalized learning paths, role-specific modules, and real-world 
         case studies, SkillMed bridges the gap between theory and practice. Develop critical skills, 
         enhance decision-making, and stay ahead in healthcare with a platform designed for aspiring medical professionals.
        </p>
        <input
          type="text"
          placeholder="  Enter you email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-gray-500"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
