import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/md';
import { FC } from 'react';

type ButtonLinkProps = {
  to: string;
  name: 'home' | 'contact' | 'about';
};
const ButtonLink: FC<ButtonLinkProps> = ({ to, name }) => {
  return (
    <Link to={`${to}`}>
      <button className="px-2 py-1  bottom-3 dark:text-white dark:hover:text-blue-600 capitalize text-black flex items-center space-x-1 text-2xl hover:text-blue-600 transition ease-in  delay-0">
        <span>{name}</span>
        {name === 'home' ? (
          <Icons.MdHome size="1.9rem" />
        ) : name === 'about' ? (
          <Icons.MdPerson size="1.9rem" />
        ) : name === 'contact' ? (
          <Icons.MdContactEmergency size="1.9rem" />
        ) : (
          ''
        )}
      </button>
    </Link>
  );
};

export default ButtonLink;
