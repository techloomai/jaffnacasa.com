"use client";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Total number of lines on the side of the page
const NUM_LINES = 30;

// Position key will place the title on the Nth line of the sidebar
const navItems = [
  { position: 1, title: "Home", href: "#home" },
  { position: 8, title: "Rooms", href: "#rooms" },
  { position: 20, title: "Attractions", href: "#attractions" },
  { position: 25, title: "Contact", href: "#contact" },
];

export function SideStaggerNavigation() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseY = useMotionValue(Infinity);

  return (
    <motion.nav
      onMouseMove={(e) => {
        mouseY.set(e.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className="fixed right-0 top-0 z-50 flex h-screen flex-col items-end justify-between py-4 pl-8"
      style={{ pointerEvents: "auto" }}
    >
      {Array.from(Array(NUM_LINES).keys()).map((i) => {
        const linkContent = navItems.find((item) => item.position === i + 1);

        return (
          <LinkLine
            title={linkContent?.title}
            href={linkContent?.href}
            isHovered={isHovered}
            mouseY={mouseY}
            key={i}
          />
        );
      })}
    </motion.nav>
  );
}

const SPRING_OPTIONS = {
  mass: 1,
  stiffness: 200,
  damping: 15,
};

const LinkLine = ({
  mouseY,
  isHovered,
  title,
  href,
}: {
  mouseY: MotionValue;
  title: string | undefined;
  href: string | undefined;
  isHovered: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  // Styles for non-link lines
  const lineWidthRaw = useTransform(distance, [-80, 0, 80], [40, 180, 40]);
  const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

  // Styles for link lines
  const linkWidth = useSpring(50, SPRING_OPTIONS);

  useEffect(() => {
    if (isHovered) {
      linkWidth.set(200);
    } else {
      linkWidth.set(50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (title && href) {
    return (
      <a href={href} onClick={handleClick} className="block">
        <motion.div
          ref={ref}
          className="group relative bg-primary/40 transition-colors hover:bg-accent"
          style={{ width: linkWidth, height: 2 }}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 z-10 w-full pt-2 font-bold uppercase text-primary transition-colors group-hover:text-accent"
              >
                {title}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </a>
    );
  } else {
    return (
      <motion.div
        ref={ref}
        className="relative bg-primary/20"
        style={{ width: lineWidth, height: 2 }}
      />
    );
  }
};

