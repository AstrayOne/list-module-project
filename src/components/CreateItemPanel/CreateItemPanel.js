import React  from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from 'components/CreateItemPanel/CreateItemPanel.module.css';
import { addItem } from 'actions';
import Input from 'components/Input';

function CreateItemPanel() {

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

      onSubmit={(values) => {
        dispatch(addItem(values))
      }}

      >
        {formProps => {
          return(
            <form className={styles.root} onSubmit={formProps.handleSubmit}>
              <Input 
                name='title' 
                value={formProps.values.title}
                className='title'/>
              <Input 
                name='director' 
                value={formProps.values.director}
                className='director'/>
              <Input 
                name='releaseYear' 
                value={formProps.values.releaseYear}
                className='releaseYear'/>
              <Input 
                name='runningTime' 
                value={formProps.values.runningTime}
                className="runningTime"/>
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
