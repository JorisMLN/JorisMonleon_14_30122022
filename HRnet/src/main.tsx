import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import CreationFrame from './layout/CreationFrame';
import DisplayFrame from './layout/DisplayFrame';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreationFrame />} />
        <Route path="/display" element={<DisplayFrame />} />
      </Routes>
    </BrowserRouter>
  /* </Provider> */
)
