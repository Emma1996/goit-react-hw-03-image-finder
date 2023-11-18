import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryList/ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            largeImageUrl={image.largeImageURL}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
