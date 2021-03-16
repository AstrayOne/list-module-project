import React  from 'react';
import { useDispatch } from 'react-redux';

import styles from './CreateItemPanel.module.css';
import { addMovie } from 'actions';
import InputPanel from 'components/InputPanel';

const CreateItemPanel = () => {

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    director: '',
    releaseYear: '',
    runningTime: '',
  };

  const addItemHandler = (values, onSubmitProps) => {
    dispatch(addMovie(values));
    onSubmitProps.resetForm();
  };

  return (
    <div className={styles.root}>
      <InputPanel 
        initialValues={initialValues}
        onSubmitHandler={addItemHandler}
        buttonName='Add item' />
    </div>
  );
}

export default CreateItemPanel;
