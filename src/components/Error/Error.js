import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';

const Error = (props) => {
  return (
    <div className={styles.error}>
      <p className={styles.errorText}>{props.children}</p>
    </div>
  );
};

Error.defaultProps = {
  children: '',
};

Error.propTypes = {
  children: PropTypes.string,
};

export default Error;
