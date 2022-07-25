/* eslint-disable */
import React from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search.svg';
import clearIcon from '../../assets/img/close.svg';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import {setSearchValue} from '../../redux/Slices/filterSlice'

const Search:React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);


  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
