import { createBrowserRouter } from 'react-router';
import { Layout } from './views/layout';
import { ROUTES } from './constants';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: ROUTES,
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('##/views/not-found');
      return {
        element: <NotFound />,
      };
    },
  },
]);
