import React, { Component } from 'react';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={styles.loading}>
        <span className={styles.spinner}></span>
        <span>Loading...</span>
      </div>
    );
  }
}
