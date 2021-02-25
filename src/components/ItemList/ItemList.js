import React, { useEffect } from 'react';
import styles from 'components/ItemList/ItemList.module.css';
import Item from 'components/Item';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function ItemList(props) {
  const location = useLocation();
  const { items } = props; 
  const parsed = queryString.parse(location.search);

  let filteredItems = items;

  if (parsed.search) {
    filteredItems = items.filter((item) => item.title.includes(parsed.search) ||
    item.director.includes(parsed.search) ||
    item.releaseYear.includes(parsed.search) ||
    item.runningTime.includes(parsed.search)
    )
  }

  return (
    <div className={styles.root}>
      {filteredItems.map((item) => {
        return (
          <Item key={item.id} item={item}/>
        )
      })}
    </div>
  );
}

export default ItemList;
