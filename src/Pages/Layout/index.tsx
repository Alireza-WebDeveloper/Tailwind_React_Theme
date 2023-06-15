import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Layout;
