"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link'

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Patient-Centered Communication</HoveredLink>
            <HoveredLink href="/courses">Emergency Medicine Basics</HoveredLink>
            <HoveredLink href="/courses">Telemedicine Mastery</HoveredLink>
            <HoveredLink href="/courses">Pandemic Preparedness and Response</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href='/courses'>All Courses</HoveredLink>
            <HoveredLink href='/courses'>Basic Music Theory</HoveredLink>
            <HoveredLink href='/courses'>Advanced Composition</HoveredLink>
            <HoveredLink href='/courses'>Songwriting</HoveredLink>
            <HoveredLink href='/courses'>Music Production</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        </Link>

        <Link href='/signup'>
          <MenuItem setActive={setActive} active={active} item="SignUp">
          </MenuItem>
        </Link>

        <Link href='/login'>
          <MenuItem setActive={setActive} active={active} item="Login"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
