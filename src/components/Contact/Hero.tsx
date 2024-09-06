const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[27rem] border border-secondary dark:border-primaryDark/60 rounded-3xl uppercase gap-[5px] text-secondary dark:text-primaryDark">
      <p className="font-medium text-xl">Got project in mind?</p>
      <p className="font-bold text-[3.8rem]">Let’s Connect</p>
      <button className="py-2 px-6 border rounded-xl mt-10">
        <p className="font-medium text-xl uppercase">Let’s Talk</p>
      </button>
    </div>
  );
};

export default Hero;
