"use client";
import { useIsScrolling } from "@/hooks";

export const NavigationClientContainer = ({ children }: { children: any }) => {
  const { isScrolling } = useIsScrolling();

  return (
    <header
      className={`grid gap-2 fixed top-0 left-0 z-10 py-2 bg-white transition-all ${
        isScrolling ? "border-b-2 border-black" : ""
      }`}
      style={{ width: "calc(100vw - 360px)" }}
    >
      <nav className="font-medium">
        <ul className="flex gap-4 justify-around">{children}</ul>
      </nav>
    </header>
  );
};
