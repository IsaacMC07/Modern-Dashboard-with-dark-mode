import { useState, useEffect, useDebugValue } from 'react';
export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <header className="bg-purple-bg-lavender h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[480px] xl:mb-[200px] dark:bg-dark-purple-midnight">
      <h1 className="text-text-primary dark:text-very-pale-blue text-2xl font-bold mb-1">
        Social Media Dashboard
      </h1>

      <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold fond-bold mb-6">
        Total Followers: 23,004 (Not real Data)
      </p>
      <hr className="bg-black mb-[19px]" />
      <div className="flex place-content-between">
        <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold">
          Dark Mode
        </p>
        <label
          htmlFor="darkmode"
          className="border relative bg-toggle-gray w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[2px]"
        >
          <input
            onClick={handleClick}
            id="darkmode"
            type="checkbox"
            className="peer sr-only"
          />
          <div className=" w-full h-full peer-checked:bg-toggle-aqua absolute top-0 left-0"></div>

          <div className="w-[18px] h-[18px] bg-light-grayish-blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
        </label>
      </div>
    </header>
  );
};
