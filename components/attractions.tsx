"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiBook,
  FiShield,
  FiClock,
  FiHome,
} from "react-icons/fi";

export function Attractions() {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < attractions.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-light px-4 pt-12 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] text-primary md:text-5xl">
            Explore the Beauty of Jaffna{" "}
            <span className="text-primary/60">from Jaffna Casa</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-primary p-4 text-2xl text-white transition-colors hover:bg-primary-dark"
              onClick={shiftLeft}
              aria-label="Previous attraction"
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-primary p-4 text-2xl text-white transition-colors hover:bg-primary-dark"
              onClick={shiftRight}
              aria-label="Next attraction"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4 overflow-hidden">
          {attractions.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  Icon: IconType;
}

const Feature = ({
  position,
  index,
  title,
  description,
  Icon,
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        isEven
          ? "bg-primary text-white"
          : "bg-accent text-primary"
      }`}
    >
      <Icon
        className={`absolute right-2 top-2 text-7xl opacity-20 ${
          isEven ? "text-white" : "text-primary"
        }`}
      />
      <h3 className="mb-8 text-3xl font-bold">
        {isEven ? title : <span className="text-primary">{title}</span>}
      </h3>
      <p className={isEven ? "text-neutral-light" : "text-primary/90"}>
        {description}
      </p>
    </motion.div>
  );
};

const attractions = [
  {
    title: "Nallur Kandaswamy Kovil",
    Icon: FiHome,
    description:
      "One of the most significant Hindu temples in Jaffna, known for its grand architecture and spiritual significance. A must-visit destination for cultural and religious experiences.",
  },
  {
    title: "Jaffna Public Library",
    Icon: FiBook,
    description:
      "A symbol of resilience and knowledge, rebuilt after the civil war, housing thousands of books and historical documents. A testament to the region's rich cultural heritage.",
  },
  {
    title: "Jaffna Fort & Lagoon",
    Icon: FiShield,
    description:
      "Historic Portuguese and Dutch fort overlooking the scenic Jaffna Lagoon, perfect for history enthusiasts. Explore centuries of colonial history with stunning waterfront views.",
  },
  {
    title: "Clock Tower & City Centre",
    Icon: FiClock,
    description:
      "The vibrant heart of Jaffna city, surrounded by local markets, shops, and traditional architecture. Experience the authentic local culture and cuisine.",
  },
  {
    title: "Local Temples & Arch Gateways",
    Icon: FiMapPin,
    description:
      "Explore the beautiful white arch gateways and numerous temples that dot the Jaffna landscape. Discover the unique architectural heritage of Northern Sri Lanka.",
  },
];
