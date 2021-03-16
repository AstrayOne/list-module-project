import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import styles from './Item.module.css';

import { deleteMovie, editMovie } from 'actions';
import InputPanel from 'components/InputPanel';

const Item = (props) => {
  const dispatch = useDispatch();
  const cn = classNames.bind(styles);

  const { id , title, director, releaseYear, runningTime } = props.item;

  const initialValues = {
    title: title,
    director: director,
    releaseYear: releaseYear,
    runningTime: runningTime,
  };

  const [isEdited, setIsEdited] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(false);

  const itemRef = useRef(null);
 
  const buttonEditClassNames = cn('editButton', {
    buttonVisible: iconsVisible,
    buttonNoVisible: !iconsVisible,
  });

  const buttonDeleteClassNames = cn('deleteButton', {
    buttonVisible: iconsVisible,
    buttonNoVisible: !iconsVisible,
  });

  const deleteItem = () => {
    if (window.confirm('Delete Movie?')) {
      dispatch(deleteMovie(props.item.id));
    }
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

  const confirmChangesHandler = (values) => {
    dispatch(editMovie({...values, id: id}));
    setIsEdited(false);
    setIconsVisible(false);
  }

  const editItemForm = 
    <InputPanel 
      initialValues={initialValues}
      onSubmitHandler={confirmChangesHandler}
      buttonName='Confirm changes' 
    />

  const item = 
    <div className={styles.item}>
      <Link className={styles.title} to={`/itemlist/${id}`}>{`${title}, ${releaseYear}`}</Link>
      <p className={styles.director}>{director}</p>
      <p className={styles.runningTime}>{`${runningTime} min`}</p>
      <div className={buttonEditClassNames} onClick={editItem}></div>
      <div className={buttonDeleteClassNames} onClick={deleteItem}></div>
    </div>

  return(
    <div className={styles.root} ref={itemRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {
        isEdited ? editItemForm : item
      }
    </div>)
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