import { NavLink } from "./atoms/NavLink";
import { NavigationClientContainer } from "./atoms";

export const Header = async () => {
  const navigation = [
    {
      id: "1",
      label: "Home",
      link: "home",
    },
    {
      id: "2",
      label: "About",
      link: "about",
    },
    {
      id: "3",
      label: "Projects",
      link: "projects",
    },
  ];

  return (
    <NavigationClientContainer>
      {navigation.map((item, i) => (
        <NavLink key={i} text={item.label} link={`#`} />
      ))}
    </NavigationClientContainer>
  );
};
