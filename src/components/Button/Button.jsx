import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <button className={styles.Button} onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
