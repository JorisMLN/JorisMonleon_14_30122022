import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CreationFrame from './layout/CreationFrame';
import DisplayFrame from './layout/DisplayFrame';
import store from './features/reducer/employeeReducer';

import { persistReducer, persistStore } from 'redux-persist';
import { persistor } from './features/reducer/employeeReducer';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreationFrame />} />
          <Route path="/display" element={<DisplayFrame />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
