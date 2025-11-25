"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";

// Brand colors: green variations and warm yellow accent
const COLORS_TOP = ["#2d5016", "#3d6b1f", "#f5a623", "#ffb84d"];

export function HeroComingSoon() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #1f3509 50%, ${color})`;

  const handleEmailClick = () => {
    window.location.href =
      "mailto:jaffnacasasandilipay@gmail.com?subject=Jaffna Casa Booking Inquiry";
  };

  const handleLocationClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-white"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl">
          <span className="bg-gradient-to-br from-white via-neutral-light to-accent bg-clip-text text-transparent">
            Jaffna Casa
          </span>
          <br />
          <span className="text-accent">Fine Stay in Jaffna</span>
        </h1>

        <p className="my-6 max-w-2xl text-center text-lg leading-relaxed text-neutral-light md:text-xl md:leading-relaxed">
          A/C & Non A/C Rooms • 3 Bedroom + Hall + Kitchen • Perfect for Groups
          & Family
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Button
              size="lg"
              onClick={handleEmailClick}
              className="text-lg px-8 py-6 bg-accent hover:bg-accent-dark text-white"
            >
              <Mail className="h-5 w-5" />
              Get Early Access
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:-rotate-45" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleLocationClick}
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              <MapPin className="h-5 w-5" />
              View Location
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}

