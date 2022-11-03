import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export const Socials = () => {
  return (
    <div className="flex items-center justify-center space-x-4 text-white">
      <SocialIcon url="https://twitter.com/gxxxxxxx_" fgColor="currentColor" />
      <SocialIcon url="https://github.com/0xgxxx" fgColor="currentColor" />
    </div>
  );
};
