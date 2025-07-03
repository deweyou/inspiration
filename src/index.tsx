import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '##/routes';

import '##/styles/reset.less';
import '##/styles/variables.less';
import '##/styles/global.less';
import 'virtual:uno.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
