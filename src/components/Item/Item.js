import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import styles from 'components/Item/Item.module.css';

import { deleteMovie, editMovie } from 'actions';
import Input from 'components/Input';

function Item(props) {
  const dispatch = useDispatch();

  const { id , title, director, releaseYear, runningTime } = props.item;

  const initialValues = {
    title: title,
    director: director,
    releaseYear: releaseYear,
    runningTime: runningTime,
  };

  const [isEdited, setIsEdited] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(false);
 
  const history = useHistory();
  
  const cn = classNames.bind(styles);

  const buttonEditClassNames = cn('editButton', {
    buttonVisible: iconsVisible,
    buttonNoVisible: !iconsVisible,
  });

  const buttonDeleteClassNames = cn('deleteButton', {
    buttonVisible: iconsVisible,
    buttonNoVisible: !iconsVisible,
  });

  const handleOnClick = () => {
    history.push(`/itemlist/${id}`);
    console.log(history);
  }

  const deleteItem = () => {
    console.log(props.item.id);
    dispatch(deleteMovie(props.item.id));
  }

  const editItem = () => {
    setIsEdited(true);
  }

  const handleMouseOver = () => {
    setIconsVisible(true);
  };
  
  const handleMouseOut = () => {
    setIconsVisible(false);
  };

  if (isEdited) {
    return (
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
      dispatch(editMovie({...values, id: id}));
      setIsEdited(false);
    }}

    >
      {formProps => {
        return(
          <form className={styles.form} onSubmit={formProps.handleSubmit}>
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
              className={styles.confirmButton}
              type="submit"
            >
              Confirm Changes
            </button>
          </form>
        )
      }}
    </Formik>
    );
  }

  return (
    <div className={styles.root}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}>
      
      <a  className={styles.title}
        onClick={handleOnClick}>{`${title}, ${releaseYear}`}</a>
      <p className={styles.director}>{director}</p>
      <p className={styles.runningTime}>{`${runningTime} min`}</p>
      <div className={buttonEditClassNames} onClick={editItem}></div>
      <div className={buttonDeleteClassNames} onClick={deleteItem}></div>
    </div>
  )
}


Item.defaultProps = {
  item: {},
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    director: PropTypes.string,
    releaseYear: PropTypes.string,
    runningTime: PropTypes.string,
  }),
};

export default Item;
