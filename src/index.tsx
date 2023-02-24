import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./App";
import './dayjsConfig';
import ruRU from 'antd/es/locale/ru_RU';
import {ConfigProvider as AntdConfigProvider} from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AntdConfigProvider locale={ruRU}>
      <App/>
    </AntdConfigProvider>

  </React.StrictMode>
);
