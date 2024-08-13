import { SocialNavigation } from "../navigation";

export const Footer = () => {
  return (
    <footer className="bg-black p-4 grid grid-cols-[100px_1fr] gap-4 items-center">
      <div>
        <h3 className="text-white">M-WRI</h3>
      </div>
      <SocialNavigation />
    </footer>
  );
};
