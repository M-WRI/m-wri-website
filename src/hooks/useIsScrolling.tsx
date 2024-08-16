import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const useIsScrolling = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction !== 0 && !isScrolling) {
          setIsScrolling(true);
        }
      },
      onToggle: (self) => {
        if (!self.isActive && isScrolling) {
          setIsScrolling(false);
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isScrolling]);

  return {
    isScrolling,
  };
};
