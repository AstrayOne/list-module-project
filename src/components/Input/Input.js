import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import Error from 'components/Error';
import styles from './Input.module.css';

const Input = (props) => {
  const { name, value, placeholder, ...rest } = props;

  return (
    <div className={styles.inputContainer}>
      <Field 
        className={styles.input} 
        id={name} 
        name={name} 
        placeholder={placeholder}
        {...rest} 
      />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

Input.defaultProps = {
  name: '',
  value: '',
  placeholder: ''
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
