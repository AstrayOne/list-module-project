import React from 'react';
import styles from 'components/ItemDetail/ItemDetail.module.css';
import PropTypes from 'prop-types';

function ItemDetail(props) {

  if (props.item) {
    const { item } = props;
    return (
      <div className={styles.root}>
        <div className={styles.item}>
          <p className={styles.title}>{`${item.title}, ${item.releaseYear}`}</p>
          <p className={styles.director}>{item.director}</p>
          <p className={styles.runningTime}>{item.runningTime}</p>
        </div>
      </div>
     );
  }
  else
    return (
      <div className={styles.root}>
         <h1>Page not found</h1>
      </div>
    )
};

// ItemDetail.defaultProps = {
//   item: {},
// };

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    director: PropTypes.string,
    releaseYear: PropTypes.string,
    runningTime: PropTypes.string,
  }),
};

export default ItemDetail;
