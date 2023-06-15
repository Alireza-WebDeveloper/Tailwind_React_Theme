import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/md';
const Logo = () => {
  return (
    <Link to={'/'}>
      <Icons.MdNoEncryption size="2rem" />
    </Link>
  );
};

export default Logo;
