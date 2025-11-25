"use client";

import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type LinkType = {
  title: string;
  href: string;
};

const NAV_LINKS: LinkType[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Rooms",
    href: "#rooms",
  },
  {
    title: "Attractions",
    href: "#attractions",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export function Header({ children }: { children?: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className="bg-primary p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <DesktopLinks
              links={NAV_LINKS}
              handleLinkClick={handleLinkClick}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden rounded-md bg-accent px-6 py-2 text-sm text-primary transition-colors hover:bg-accent-light md:flex whitespace-nowrap"
            >
              <a href="tel:+94701188111">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-bold">Call Now</span>
              </a>
            </Button>
            <button
              onClick={() => setMobileNavOpen((pv) => !pv)}
              className="block text-2xl text-white md:hidden"
            >
              <FiMenu />
            </button>
          </div>
        </div>
        <MobileLinks
          links={NAV_LINKS}
          open={mobileNavOpen}
          handleLinkClick={handleLinkClick}
        />
      </nav>
      {children && (
        <motion.main layout className="bg-primary px-2 pb-2">
          <div className="bg-background rounded-3xl">{children}</div>
        </motion.main>
      )}
    </>
  );
}

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Jaffna Casa - Fine Stay"
        width={140}
        height={70}
        className="h-12 w-auto object-contain"
        priority
      />
    </div>
  );
};

const DesktopLinks = ({
  links,
  handleLinkClick,
}: {
  links: LinkType[];
  handleLinkClick: (href: string) => void;
}) => {
  return (
    <div className="ml-9 hidden md:block">
      <div className="flex items-center gap-6">
        {links.map((l) => (
          <a
            key={l.title}
            href={l.href}
            onClick={(e) => {
              if (l.href.startsWith("#")) {
                e.preventDefault();
                handleLinkClick(l.href);
              }
            }}
            className="cursor-pointer text-white transition-colors hover:text-accent"
          >
            {l.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const MobileLinks = ({
  links,
  open,
  handleLinkClick,
}: {
  links: LinkType[];
  open: boolean;
  handleLinkClick: (href: string) => void;
}) => {
  return (
    <AnimatePresence mode="popLayout">
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="flex flex-col gap-4 py-6 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.title}
              href={l.href}
              onClick={(e) => {
                if (l.href.startsWith("#")) {
                  e.preventDefault();
                  handleLinkClick(l.href);
                }
              }}
              className="text-md block font-semibold text-white hover:text-accent transition-colors"
            >
              {l.title}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

