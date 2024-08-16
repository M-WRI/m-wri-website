"use client";
import { useIsScrolling } from "@/hooks";

export const NavigationClientContainer = ({ children }: { children: any }) => {
  const { isScrolling } = useIsScrolling();

  return (
    <header
      className={`grid gap-2 sticky top-0 left-0 right-0 py-2 bg-white transition-all ${
        isScrolling ? "border-b-2 border-black" : ""
      }`}
    >
      <nav className="font-medium">
        <ul className="flex gap-4 justify-around">{children}</ul>
      </nav>
    </header>
  );
};
