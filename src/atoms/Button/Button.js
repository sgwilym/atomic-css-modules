import React from 'react';
import styles from './Button.css';

export default ({onClick, label}) =>
  <button
    className={styles.button}
    onClick={onClick}
  >
      {label}
  </button>
