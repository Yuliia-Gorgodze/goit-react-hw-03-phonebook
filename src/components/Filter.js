import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.css';

const Filter = ({ state, inputChange }) => {
  return (
    <label class={styles.input}>
      Кого ищем?{' '}
      <input
        class={styles.inputValue}
        type="text"
        name="filter"
        value={state}
        onChange={inputChange}
      ></input>
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  state: propTypes.string.isRequired,
  inputChange: propTypes.func.isRequired,
};
