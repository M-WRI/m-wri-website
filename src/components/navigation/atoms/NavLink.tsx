"use client";

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
    <li className={`${textColor} text-xl cursor-pointer`}>
      <a href={`${link}`} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
};
