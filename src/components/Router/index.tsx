import { Routes, Route } from 'react-router-dom';

import App from '../../App';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';

import Layout from '../Layout';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
