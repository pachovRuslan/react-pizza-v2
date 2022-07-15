/* eslint-disable */
import React from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/close.svg';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

function Search() {
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <img className={styles.icon} width="38" src={searchIcon} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="поиск пиццы..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          width="38"
          src={clearIcon}
          alt="close"
        />
      )}
    </div>
  );
}

export default Search;
