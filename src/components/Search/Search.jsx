import React from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/close.svg';

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <img className={styles.icon} width="38" src={searchIcon} alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="поиск пиццы..."
      />
      {searchValue && <img onClick={()=> setSearchValue('')} className={styles.clearIcon} width="38" src={clearIcon} alt="close" />}
    </div>
  );
}

export default Search;
