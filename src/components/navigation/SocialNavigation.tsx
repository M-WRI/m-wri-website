import { NavLink } from "./atoms";

export const SocialNavigation = () => {
  const socialMedia = ["instagram", "github", "linkedin", "youtube"];

  return (
    <ul className="grid grid-cols-2">
      {socialMedia.map((social) => (
        <NavLink
          key={social}
          text={social}
          link={`https://${social}.com`}
          color="white"
        />
      ))}
    </ul>
  );
};
