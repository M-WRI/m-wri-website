export const NavLink = ({
  text,
  link,
  color = "black",
}: {
  text: string;
  link: string;
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
