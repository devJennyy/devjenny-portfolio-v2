"use client";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { gradientTextStyles, separatorLineStyles } from "../../styles/styles";
import Footer from "../Footer";
import SocialLogos from "../SocialLogos";
import { IoIosRocket } from "react-icons/io";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { techStacks, userRoles } from "../../data/projectOtherInfoData";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const ProjectDetails = ({ data }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [lastClicked, setLastClicked] = useState<"prev" | "next" | null>(
    "next"
  );

  const handlePrevClick = () => {
    scrollPrev();
    setLastClicked("prev");
  };

  const handleNextClick = () => {
    scrollNext();
    setLastClicked("next");
  };

  return (
    <div className="flex flex-col items-center w-full pt-14 gap-6">
      <div className="py-2 px-5 w-fit border border-secondary dark:border-primaryDark rounded-full">
        <p className="text-secondary dark:text-primaryDark text-sm">
          {data.tag}
        </p>
      </div>
      <div className="max-w-[42.5rem] w-full font-medium text-4xl text-center leading-snug">
        <p>
          {data.title}
          <span className={`text-secondary dark:${gradientTextStyles}`}>
            {" "}
            {data.subtitle}
          </span>
        </p>
      </div>
      <div className="max-w-[38rem] w-full text-center text-primary/50 dark:text-primaryDark/70 mt-2">
        <p>{data.description}</p>
      </div>
      <div className="flex items-center relative px-20">
        <button
          onClick={handlePrevClick}
          className={`embla__prev flex justify-center items-center w-11 h-11 rounded-xl absolute left-10 ${
            lastClicked === "prev"
              ? "bg-secondary"
              : "bg-secondary/40 dark:bg-midnightBlue/40"
          }`}
        >
          <MdOutlineArrowBack size={18} className="text-white" />
        </button>
        <div className="w-full relative">
          <img
            src="/images/mockup-screen.png"
            alt="Mockup Screen Light"
            className="w-full h-auto dark:hidden"
          />
          <img
            src="/images/mockup-screen-dark.png"
            alt="Mockup Screen Dark"
            className="w-full h-auto hidden dark:block"
          />

          <div
            className="embla mx-auto absolute inset-0 bottom-0 max-w-[53rem] w-full h-[30rem] mt-[5.8rem]"
            ref={emblaRef}
          >
            <div className="embla__container h-full">
              {data.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="embla__slide flex justify-center items-center"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={handleNextClick}
          className={`embla__next flex justify-center items-center w-11 h-11 rounded-xl absolute right-10 ${
            lastClicked === "next"
              ? "bg-secondary"
              : "bg-secondary/40 dark:bg-midnightBlue"
          }`}
        >
          <MdOutlineArrowForward size={18} className="text-white" />
        </button>
      </div>
      <div className="max-w-[39rem] w-full text-center text-primary/50 dark:text-primaryDark/70 mt-[-1.7rem]">
        <p>
          Here are the top 10 features of the web application. To explore the
          full project, feel free to visit my
          <a
            target="_blank"
            href={data.githubLink}
            className={`text-secondary dark:${gradientTextStyles} font-medium ml-1 hover:underline-offset-4 hover:underline cursor-pointer`}
          >
            GitHub
          </a>
          .
        </p>
      </div>

      {/* Other Information */}
      <div className="mt-[5rem] w-full px-20">
        <div className="flex flex-col mb-10">
          <p className="font-semibold text-lg mb-[-1.5rem] text-secondary/80 dark:text-primaryDark/60">
            Other Information
          </p>
          <div
            className={`w-full h-[1px] bg-secondary/60 ${separatorLineStyles}`}
          ></div>
        </div>

        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <p className="text-2xl dark:hidden">🚀</p>
              <IoIosRocket
                size={32}
                className="dark:text-primaryDark hidden dark:flex"
              />
              <p
                className={`font-semibold text-2xl text-secondary dark:${gradientTextStyles}`}
              >
                User Roles and Features
              </p>
            </div>

            <div className="dark:gradient-flat w-full rounded-[2rem]">
              <div className="w-full h-full border-secondary border dark:border-none rounded-[2rem] gradient-background-two">
                <div className="flex flex-col gap-5 p-10">
                  {userRoles.map((role) => (
                    <p className="text-[15px]" key={role.overviewHeader}>
                      <span className="font-bold">{role.overviewHeader}</span>,{" "}
                      {role.overviewDescription}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[16rem] w-full gap-5">
            <div className="flex items-center gap-2">
              <p className="text-2xl dark:hidden">🛠️</p>
              <HiMiniWrenchScrewdriver
                size={26}
                className="dark:text-primaryDark hidden dark:flex"
              />
              <p
                className={`font-semibold text-2xl text-secondary dark:${gradientTextStyles}`}
              >
                Tech Stacks
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {techStacks?.map((stack, index) => (
                <div
                  key={index}
                  className="dark:gradient-flat bg-secondary/10 w-full h-[3.1rem] rounded-xl"
                >
                  <div className="flex justify-start items-center px-2 w-full h-full gradient-background-flat rounded-xl gap-3">
                    <div className="flex justify-center items-center w-9 h-9 bg-secondary/80 dark:bg-midnightBlue rounded-lg text-white dark:text-primaryDark">
                      {stack.icon}
                    </div>
                    <p
                      className={`font-medium text-sm text-primary dark:${gradientTextStyles}`}
                    >
                      {stack.name}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <SocialLogos />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
