import {
  FaFacebookMessenger,
  FaGithubAlt,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = {
  messenger: {
    href: "https://m.me/devjennyy",
    icon: <FaFacebookMessenger size={19} />,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/jennypieloor/",
    icon: <FaLinkedinIn size={22} />,
  },
  instagram: {
    href: "https://www.instagram.com/jnnyplr",
    icon: <FaInstagram size={20} />,
  },
  github: {
    href: "https://github.com/devJennyy",
    icon: <FaGithubAlt size={22} />,
  },
};

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-5 relative w-full my-9">
      <div className="faded-side-gradient dark:faded-side"></div>
      <div className="flex justify-center items-center gap-11 text-secondary dark:text-primaryDark px-[5rem]">
        {Object.values(socialLinks).map(({ href, icon }) => (
          <a key={href} href={href}>
            {icon}
          </a>
        ))}
      </div>
      <div className="faded-side-gradient dark:faded-side"></div>
    </div>
  );
};

export default SocialLinks;
