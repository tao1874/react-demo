/* eslint-disable no-console */
import React from 'react';

import './index.scss';

const tabsData = [
  {
    lable: 'Tab1',
    handler: () => {
      console.log(this.label);
    }
  },
  {
    lable: 'Tab1',
    handler: () => {
      console.log(this.label);
    }
  },
  {
    lable: 'Tab1',
    handler: () => {
      console.log(this.label);
    }
  }
];
const TabItem = ({ onClick, label }) => {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </li>
  );
};
const Tabs = props => {
  return (
    <div className="tools-tab-box">
      <nav />
      {/* <div className="tab-box">tabcontainer</div> */}
    </div>
  );
};
