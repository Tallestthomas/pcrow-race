import React from 'react';

export default ({ condition, children }) => (
  <React.Fragment>
    { condition && children }
  </React.Fragment>
);
