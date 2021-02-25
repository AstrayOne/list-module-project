import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from 'components/SearchPanel/SearchPanel.module.css';
import { keys } from 'constants';

function SearchPanel() {

  const history = useHistory();
  const [search, setSearch] = useState('');

  const changeSearch = (event) => {
    setSearch(event.target.value);
  }

  const startSearch = () => {
    history.push({
      path:`/itemlist`,
      search:`?search=${search}`
    });
  }

  const handleKeyEnter = (event) => {
    if (event.keyCode === keys.keyEnter && search) {
      startSearch();
    }
  };

  const handleOnButtonSearch = () => {
    if (search) {
      startSearch();
    }
  }
  return (
    <div className={styles.root}>
      <input
        type='text'
        className={styles.search}
        name='search'
        value={search}
        onChange={changeSearch}
        onKeyDown={handleKeyEnter}
        placeholder='Search'
      />
      <div 
        className={styles.searchButton}
        onClick={handleOnButtonSearch}></div>
    </div>
  )
};

export default SearchPanel;
