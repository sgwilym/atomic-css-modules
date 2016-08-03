import React, { Component } from 'react';
import styles from './App.css';
import SearchBox from './molecules/SearchBox';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <SearchBox/>
      </div>
    );
  }
}

export default App;
