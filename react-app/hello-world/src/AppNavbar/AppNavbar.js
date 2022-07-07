import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppNavbar.module.css';

const AppNavbar = () => (
  <div className={styles.AppNavbar} data-testid="AppNavbar">
    AppNavbar Component
  </div>
);

AppNavbar.propTypes = {};

AppNavbar.defaultProps = {};

export default AppNavbar;
