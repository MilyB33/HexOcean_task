import { Outlet } from 'react-router-dom';
import ToastContextProvider from '../../context/ToastContext';
import ToastMessage from '../Generic/ToastMessage';

const Layout = () => {
  return (
    <ToastContextProvider>
      <div className="relative flex items-center justify-center w-screen min-h-screen">
        <ToastMessage />
        <Outlet />
      </div>
    </ToastContextProvider>
  );
};

export default Layout;
