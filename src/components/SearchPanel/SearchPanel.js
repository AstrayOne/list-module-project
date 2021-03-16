import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import styles from './SearchPanel.module.css';

function SearchPanel() {

  const history = useHistory();
  const parsed = queryString.parse(history.location.search);

  const [search, setSearch] = useState(parsed.search);
  const [isSearchUsed, setIsSearchUsed] = useState(false);

  const changeSearch = (event) => {

    if(!isSearchUsed) {
      setIsSearchUsed(true);
    }
    setSearch(event.target.value);
  }

  useEffect(() => {
    if (isSearchUsed) {
      startSearch();
    }
  }, [search]);

  const startSearch = () => {
    history.push({
      path: `/itemlist`,
      search: `?search=${search}`
    });
  }

  return (
    <div className={styles.root}>
      <input
        type='text'
        className={styles.search}
        name='search'
        value={search}
        onChange={changeSearch}
        placeholder='Search'
      />
      <div className={styles.searchButton}>
      </div>
    </div>
  )
};

export default SearchPanel;
