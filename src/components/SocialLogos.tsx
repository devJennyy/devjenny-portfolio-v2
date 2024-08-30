const logos = [
  { name: "LinkedIn", light: "/logo/linkedIn-light.svg", dark: "/logo/linkedIn-dark.svg", height: "h-9" },
  { name: "GitHub", light: "/logo/github-light.svg", dark: "/logo/github-dark.svg", height: "h-12" },
  { name: "Vercel", light: "/logo/vercel-light.svg", dark: "/logo/vercel-dark.svg", height: "h-8" },
  { name: "Spotify", light: "/logo/spotify-light.svg", dark: "/logo/spotify-dark.svg", height: "h-9" },
];

const SocialLogos = () => {
  return (
    <div className="flex justify-between items-center w-full px-20 my-28">
      {logos.map((logo, index) => (
        <div key={index} className={logo.height}>
          <img src={logo.light} className="w-full h-full dark:hidden" alt={`${logo.name} light`} />
          <img src={logo.dark} className="w-full h-full dark:block hidden" alt={`${logo.name} dark`} />
        </div>
      ))}
    </div>
  );
};

export default SocialLogos;
