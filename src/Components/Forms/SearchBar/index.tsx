import * as Icons from 'react-icons/md';
import { ThemeContext } from '../../../Context';
const SearchBar = () => {
  const { theme } = ThemeContext();
  return (
    <form className="lg:w-1/3 w-full">
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:capitalize placeholder:text-lg"
          placeholder="search..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="text-white absolute right-1  h-full bottom-0 font-medium rounded-lg text-sm px-4 py-2"
        >
          <Icons.MdSearch
            size="2.3rem"
            color={theme === 'light' ? 'black' : 'white'}
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
