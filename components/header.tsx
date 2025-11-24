"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-dark bg-neutral-light/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-light/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M16 4L20 12L28 14L20 16L16 24L12 16L4 14L12 12L16 4Z"
              fill="currentColor"
            />
            <circle cx="16" cy="20" r="3" fill="white" />
          </svg>
          <span className="text-lg font-bold text-primary">Jaffna Casa</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            asChild
            className="hidden sm:flex"
          >
            <a href="tel:+94701188111">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:flex"
          >
            <a
              href="https://wa.me/94701188111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </Button>
          <Button
            variant="default"
            size="icon"
            asChild
            className="sm:hidden"
          >
            <a href="tel:+94701188111" aria-label="Call Now">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

