  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import Context from './contex';
  import './index.css';
  import Root from './root';


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Context>
      <Root />
      </Context>
    </React.StrictMode>
  );
