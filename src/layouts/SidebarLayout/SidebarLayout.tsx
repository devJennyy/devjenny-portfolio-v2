import DarkModeToggle from "../../components/DarkModeSwitch/DarkModeToggle";

const SidebarLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[5rem] gap-8">
      <DarkModeToggle />
      <div className="w-full h-[24.7rem] bg-white dark:bg-secondaryDark rounded-2.5xl"></div>
    </div>
  );
};

export default SidebarLayout;
