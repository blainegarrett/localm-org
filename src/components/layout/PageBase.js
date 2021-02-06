// Page Base Component
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

export default function PageBase(props) {
  let wrapper = { component: 'div' };

  return (
    <wrapper.component>
      <div style={{ padding: 32 }}>{props.children}</div>
    </wrapper.component>
  );
}

PageBase.propTypes = {
  children: PropTypes.node,
  loginRequired: PropTypes.bool
};
