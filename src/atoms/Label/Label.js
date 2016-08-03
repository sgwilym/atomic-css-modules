import React from 'react';
import styles from './Label.css';

export default ({labelTitle}) =>
  <div className={styles.label}>
    { labelTitle }
  </div>;
