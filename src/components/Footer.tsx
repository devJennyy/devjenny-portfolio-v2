const Footer = () => {
  return (
    <div className="w-full">
      <div className="absolute bottom-0 left-0 z-0">
        <img src="/images/footer-bg.svg" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-center w-full text-[12px] gap-1 absolute bottom-[20px] left-0">
        <p>Designed and developed by Jenny Pieloor</p>
        <p>2024</p>
      </div>
    </div>
  );
};

export default Footer;
