import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppFooter.module.css';

const AppFooter = () => (
  <div className={styles.AppFooter} data-testid="AppFooter">
    AppFooter Component
  </div>
);

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
