"use client";

import Link from "next/link";

export const NavLink = ({
  text,
  link,
  color = "black",
}: {
  text: string | null;
  link: string | null;
  color?: "black" | "white";
}) => {
  const textColor = color === "black" ? "text-black" : "text-white";
  return (
    <li
      className={`${textColor} text-xl font-semibold cursor-pointer hover:bg-black hover:text-white `}
    >
      <Link href={`/${link}`}>{text}</Link>
    </li>
  );
};
