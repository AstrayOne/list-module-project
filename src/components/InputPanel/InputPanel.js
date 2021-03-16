import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import styles from './InputPanel.module.css';
import Input from 'components/Input';

const InputPanel = (props) => {
  const { initialValues, onSubmitHandler, buttonName } = props;

  const nextYear = new Date().getFullYear() + 1;

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Required')
      .max(30, 'Too long title'),
    director: Yup.string()
      .required('Required')
      .max(30, `Too long director's name`),
    releaseYear: Yup.number()
      .typeError('Must be a number')
      .required('Required')
      .min(1900, 'Year must be more than 1900')
      .max(nextYear, `Year must be less than ${nextYear}`),
    runningTime: Yup.number()
      .typeError('Must be a number')
      .required('Required')
      .min(0, 'Wrong running time')
      .max(10000, 'Wrong running time'),
    });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
      >
      {formProps => {
        return(
          <form className={styles.form} onSubmit={formProps.handleSubmit}>
            <Input 
              name='title' 
              value={formProps.values.title}
              placeholder='Title'
            />
            <Input 
              name='director' 
              value={formProps.values.director}
              placeholder='Director'
            />
            <Input 
              name='releaseYear' 
              value={formProps.values.releaseYear}
              placeholder='Release year'
            />
            <Input 
              name='runningTime' 
              value={formProps.values.runningTime}
              placeholder='Running time'
            />
            <button
              className={styles.confirmButton}
              type='submit'
            >
              {buttonName}
            </button>
          </form>
        )
      }}
      </Formik>
  );
};

InputPanel.defaultProps = {
  initialValues: {},
  onSubmitHandler: () => {},
  buttonName: ''
};

InputPanel.propTypes = {
  initialValues: PropTypes.object,
  onSubmitHandler: PropTypes.func,
  buttonName: PropTypes.string
};


export default InputPanel;


    