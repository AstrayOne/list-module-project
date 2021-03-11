import React  from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from 'components/CreateItemPanel/CreateItemPanel.module.css';
import { addItem } from 'actions';
import Input from 'components/Input';

const CreateItemPanel = () => {

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    director: '',
    releaseYear: '',
    runningTime: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        director: Yup.string().required('Required'),
        releaseYear: Yup.string()
          .required('Required')
          .min(4, 'Wrong year')
          .max(4, 'Wrong year'),
        runningTime: Yup.string()
        .required('Required')
        .max(3, 'Wrong runningTime'),
      })}

      onSubmit={(values, onSubmitProps) => {
        dispatch(addItem(values));
        onSubmitProps.resetForm();
      }}

      >
        {formProps => {
          return(
            <form className={styles.root} onSubmit={formProps.handleSubmit}>
              <Input 
                name='title' 
                value={formProps.values.title}
                className='title'
                placeholder='Title'/>
              <Input 
                name='director' 
                value={formProps.values.director}
                className='director'
                placeholder='Director'/>
              <Input 
                name='releaseYear' 
                value={formProps.values.releaseYear}
                className='releaseYear'
                placeholder='Release year'/>
              <Input 
                name='runningTime' 
                value={formProps.values.runningTime}
                className='runningTime'
                placeholder='Running time'/>
              <button
                className={styles.addButton}
                type="submit"
              >
                Add Movie
              </button>
            </form>
          )
        }}
      </Formik>
    </>
  );
}

export default CreateItemPanel;
