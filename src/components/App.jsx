import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Button } from './Button/Button'; // Assuming Button component is renamed as LoadMoreButton

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      images: [],
      isLoading: false,
      error: null,
      isModalOpen: false,
      modalImageUrl: '',
      page: 1,
    };
  }

  handleSearch = async searchTerm => {
    const apiKey = '39759882-73fa965e3ac5dd440dc8af6ef'; // Replace with your Pixabay API key

    const apiUrl = `https://pixabay.com/api/?q=${searchTerm}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(apiUrl);
      this.setState({ images: response.data.hits, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleImageClick = largeImageUrl => {
    this.setState({ isModalOpen: true, modalImageUrl: largeImageUrl });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, modalImageUrl: '' });
  };

  fetchMoreImages = async () => {
    const { page, images, searchTerm } = this.state;
    const apiKey = '39759882-73fa965e3ac5dd440dc8af6ef';
    const perPage = 12;

    const apiUrl = `https://pixabay.com/api/?q=${searchTerm}&page=${
      page + 1
    }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(apiUrl);
      this.setState({
        images: [...images, ...response.data.hits],
        isLoading: false,
        page: page + 1,
      });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error, isModalOpen, modalImageUrl } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <SearchBar onSubmit={this.handleSearch} />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <ImageGallery
              images={images}
              onImageClick={this.handleImageClick}
            />
            {images.length > 0 && (
              <Button onClick={this.fetchMoreImages} disabled={isLoading}>
                Load More
              </Button>
            )}
            <Modal isOpen={isModalOpen} handleClose={this.handleCloseModal}>
              <img src={modalImageUrl} alt="Modal" style={{ width: '100%' }} />
            </Modal>
          </>
        )}
      </div>
    );
  }
}

export default App;
