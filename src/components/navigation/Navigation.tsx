import { NavLink } from "./atoms";

export const Navigation = () => {
  const navigationLinks = ["Navigation 1", "Navigation 2", "Navigation 3"];
  return (
    <header className="grid gap-2 sticky top-0 left-0 right-0 py-2 bg-white">
      <nav className="font-medium">
        <ul className="flex gap-4 justify-around">
          {navigationLinks.map((link) => (
            <NavLink key={link} text={link} link={`#${link}`} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
