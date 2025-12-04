import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme.css';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.js';

import { unstableSetRender } from 'antd-mobile'; // Support since version ^5.40.0
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
