import { FC } from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import SearchBar from '../Forms/SearchBar';
import { ThemeContext } from '../../Context';
import ToggleTheme from '../ToggleTheme';
import SwipeDrawer from '../SwipeDrawer';
const Header = (): JSX.Element => {
  return (
    <header className=" bg-slate-100 dark:bg-slate-950 p-2 px-3">
      <nav className="lg:flex hidden flex-row justify-between items-center">
        <Logo />
        <Navigation />
        <SearchBar />
        <ToggleTheme />
      </nav>
      <nav className="flex lg:hidden flex-row justify-between items-center flex-wrap">
        <SwipeDrawer />
        <ToggleTheme />
      </nav>
    </header>
  );
};

export default Header;
