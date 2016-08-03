import React from 'react';
import styles from './Input.css';

export default ({placeholder}) =>
  <input
    type="text"
    placeholder={placeholder}
    className={styles.input}
  />
