import { Routes, Route } from 'react-router-dom';
import { HOME, SERVER_ERROR } from './CONSTANT';
import MainLayout from 'layouts/MainLayout';
import ServerError from 'pages/error/ServerError';
import NotFound from 'pages/error/NotFound';
import Home from 'pages/Home';
import CategoryTasks from 'pages/CategoryTasks';

export const RouterConfig = () => {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
          <Route path={HOME} element={<Home />} />
          <Route path="category/:name" element={<CategoryTasks />} />
        </Route>
      <Route path={SERVER_ERROR} element={<ServerError />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
