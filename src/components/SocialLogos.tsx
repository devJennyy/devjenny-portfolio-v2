const logos = [
  {
    name: "LinkedIn",
    light: "/logo/linkedIn-light.svg",
    dark: "/logo/linkedIn-dark.svg",
    height: "h-9",
    url: "https://www.linkedin.com/in/jennypieloor/",
  },
  {
    name: "GitHub",
    light: "/logo/github-light.svg",
    dark: "/logo/github-dark.svg",
    height: "h-12",
    url: "https://github.com/devJennyy",
  },
  {
    name: "Vercel",
    light: "/logo/vercel-light.svg",
    dark: "/logo/vercel-dark.svg",
    height: "h-8",
    url: "https://vercel.com/jenny-pieloors-projects",
  },
  {
    name: "Spotify",
    light: "/logo/spotify-light.svg",
    dark: "/logo/spotify-dark.svg",
    height: "h-9",
    url: "https://open.spotify.com/user/31g7rq5bjvgornlfbsmag6gcvuhi?si=abcb48ffe3b043b8",
  },
];

const SocialLogos = () => {
  return (
    <div className="flex justify-between items-center w-full px-20 my-28">
      {logos.map((logo, index) => (
        <a
          key={index}
          href={logo.url}
          className={logo.height}
        >
          <img
            src={logo.light}
            className="w-full h-full dark:hidden"
            alt={`${logo.name} light`}
          />
          <img
            src={logo.dark}
            className="w-full h-full dark:block hidden"
            alt={`${logo.name} dark`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLogos;
