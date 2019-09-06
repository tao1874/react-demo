import React from 'react';

import './index.styl';

export default props => {
  const { value } = props;
  const count = 100;
  const res = [];
  for (let i = 0; i < count; i += 1) {
    const element = (
      <header className="header" key={i}>
        {value + i}
      </header>
    );
    res.push(element);
  }
  return res;
};
