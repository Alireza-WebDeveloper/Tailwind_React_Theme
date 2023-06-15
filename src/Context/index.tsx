import {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from 'react';
import { IconContext } from 'react-icons';
type ContextType = {
  changeTheme(): void;
  theme: string;
};

const Context = createContext<ContextType>({} as ContextType);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(() => {
    const getTheme = localStorage.getItem('theme');
    if (getTheme && getTheme !== undefined) {
      return getTheme;
    }
    return 'light';
  });
  const htmlDom = document.querySelector('html') as HTMLElement;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    htmlDom?.classList.add(theme);
  }, [theme]);
  const changeTheme = (): void => {
    if (theme === 'light') {
      htmlDom?.classList.remove(theme);
      setTheme('dark');
    } else {
      htmlDom?.classList.remove(theme);
      setTheme('light');
    }
  };
  return (
    <IconContext.Provider
      value={{
        size: '34px',
        color: `${theme === 'light' ? 'black' : 'white'}`,
      }}
    >
      <Context.Provider value={{ changeTheme, theme }}>
        {children}
      </Context.Provider>
    </IconContext.Provider>
  );
};

export const ThemeContext = () => useContext(Context);

export default ThemeProvider;
