import { Routes, Route } from 'react-router-dom';

import App from '../../App';

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
