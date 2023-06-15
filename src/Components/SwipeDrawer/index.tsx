import * as Icons from 'react-icons/md';
import { ThemeContext } from '../../Context';
import { useState } from 'react';
import SearchBar from '../Forms/SearchBar';
import { useRef } from 'react';
import ToggleTheme from '../ToggleTheme';
const SwipeDrawer = () => {
  const { theme } = ThemeContext();
  const [open, setOpen] = useState(false);

  document.addEventListener('click', function (event) {
    const drawer: any = document.querySelector('#drawer');
    const toggleButton: any = document.querySelector('#toggle-button');
    // Check if the click occurred outside the drawer and toggle button
    if (
      !drawer.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      setOpen(false);
    }
  });
  return (
    <>
      <button
        id="toggle-button"
        className="lg:hidden flex bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5  dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        onClick={() => setOpen(!open)}
      >
        <Icons.MdMenu />
      </button>
      <div
        id="drawer"
        className={`${
          open ? 'fixed' : 'hidden'
        } right-0 top-0 dark:bg-slate-900 bg-slate-300  md:w-1/3 sm:w-1/2 max-sm:w-full h-full lg:hidden z-10`}
      >
        <section className="w-full h-full flex flex-col space-y-4 p-2">
          <button
            id="toggle-button"
            className="font-medium rounded-lg text-sm px-2 py-1.5 hover:bg-red-700 dark:hover:bg-red-500 inline  w-fit"
            onClick={() => setOpen(!open)}
          >
            <Icons.MdClose />
          </button>
          <SearchBar />
        </section>
      </div>
    </>
  );
};

export default SwipeDrawer;
