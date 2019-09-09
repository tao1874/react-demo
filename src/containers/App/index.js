import React from 'react';

import Header from './components/Header';

import Main from './components/Main';

import './index.scss';

export default () => {
  return (
    <div className="app-container">
      <Header value="hello react" />
      <Main />
    </div>
  );
};
