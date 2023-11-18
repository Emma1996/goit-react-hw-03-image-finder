import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  handleClick = () => {
    this.props.onImageClick(this.props.largeImageUrl);
  };

  render() {
    return (
      <li className={styles.ImageGalleryItem} onClick={this.handleClick}>
        <img
          className={styles.ImageGalleryItemImg}
          src={this.props.imageUrl}
          alt=""
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
