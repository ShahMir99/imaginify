"use client";

import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((items) => {
                const isActive = pathname === items.route;
                return (
                  <li
                    key={items.route}
                    className={cn(
                      "sidebar-nav_element group",
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    )}
                  >
                    <Link className="sidebar-link" href={items.route}>
                      <Image
                        src={items.icon}
                        alt={items.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {items.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6, 8).map((items) => {
                const isActive = pathname === items.route;
                return (
                  <li
                    key={items.route}
                    className={cn(
                      "sidebar-nav_element group",
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    )}
                  >
                    <Link className="sidebar-link" href={items.route}>
                      <Image
                        src={items.icon}
                        alt={items.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {items.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
