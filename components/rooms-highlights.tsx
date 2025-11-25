"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Users, Home, Calendar, Wind, UtensilsCrossed } from "lucide-react";

export function RoomsHighlights() {
  return (
    <div className="relative h-fit bg-neutral-light">
      <Features />
    </div>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-accent px-4 py-2 text-sm font-semibold uppercase text-primary">
        Guest House Features
      </span>
      <h2 className="mb-4 mt-2 text-4xl font-bold leading-tight text-primary sm:text-5xl">
        Comfortable A/C & Non A/C Rooms
      </h2>
      <p className="text-lg text-foreground/80">
        Experience comfort and convenience in the heart of Jaffna. Our guest
        house offers spacious accommodations perfect for families, groups, and
        extended stays. Each unit includes full self-catering facilities with
        modern amenities.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const features = [
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Family Rooms",
      description:
        "Spacious rooms ideal for families and groups. Comfortable accommodations designed for extended stays with all modern amenities.",
    },
    {
      icon: <Home className="h-12 w-12 text-accent" />,
      title: "3 Bedroom + Hall + Kitchen",
      description:
        "Self-catering facilities perfect for long stays. Full kitchen and common areas for your convenience. Ideal for groups and families.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-accent" />,
      title: "Group Friendly",
      description:
        "Perfect for wedding groups, events, and pilgrim stays. We accommodate large parties with ease and provide all necessary facilities.",
    },
    {
      icon: <Wind className="h-12 w-12 text-accent" />,
      title: "A/C & Non A/C Options",
      description:
        "Choose between air-conditioned comfort or natural ventilation. All rooms are well-maintained and designed for your comfort.",
    },
  ];

  return (
    <div className="relative w-full">
      <Gradient />
      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        {features.map((feature, index) => (
          <CarouselItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={features.length}
            feature={feature}
          />
        ))}
      </div>
      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  feature,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-primary p-8 text-white shadow-lg"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-accent/20 rounded-full">{feature.icon}</div>
        <h3 className="text-2xl font-bold text-accent">{feature.title}</h3>
        <p className="text-neutral-light max-w-md">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-neutral-light to-neutral-light/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;
