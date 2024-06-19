import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* импортируем стор из store через специальный компонент <Provider/> из Redax! чтобы приложение знало о сторе */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

