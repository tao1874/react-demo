import React from 'react';

import './index.scss';

export default props => {
  const { value } = props;
  return <header className="header">{value}</header>;
};
