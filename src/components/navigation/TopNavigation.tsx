import { createClient } from "@/prismicio";
import { NavLink } from "./atoms/NavLink";
import { NavigationClientContainer } from "./atoms";

export const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <NavigationClientContainer>
      {settings.data.navigation.map((item, i) => (
        <NavLink key={i} text={item.label} link={`#${item.link}`} />
      ))}
    </NavigationClientContainer>
  );
};
