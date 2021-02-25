import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Error from 'components/Error';
import styles from 'components/Input/Input.module.css';

const Input = (props) => {
  const { name, value, className, ...rest } = props;

  const cn = classNames.bind(styles);

  const inputClassNames = cn('input', {
    title: className === 'title',
    director: className === 'director',
    releaseYear: className === 'releaseYear',
    runningTime: className === 'runningTime',
  });

  return (
    <div >
      <Field 
        className={inputClassNames} 
        id={name} 
        name={name} 
        {...rest} 
        placeholder={name}
      />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

Input.defaultProps = {
  name: '',
  value: '',
  className: '',
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
