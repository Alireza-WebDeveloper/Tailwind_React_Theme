import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { ThemeContext } from '../../Context';
import * as Icons from 'react-icons/md';
export default function ToggleTheme() {
  const { theme, changeTheme } = ThemeContext();
  return (
    <div>
      <Switch
        checked={theme === 'light' ? true : false}
        onChange={changeTheme}
        className={`${theme === 'dark' ? 'bg-white' : 'bg-black'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${theme === 'dark' ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white dark:bg-black shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {theme === 'dark' ? <Icons.MdDarkMode /> : <Icons.MdLightMode />}
        </span>
      </Switch>
    </div>
  );
}
