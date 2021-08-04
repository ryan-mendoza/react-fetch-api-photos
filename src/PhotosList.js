import React from 'react';

class PhotosList extends React.Component {
  state = {
    isLoading: false,
    photos: [],
    error: null,
  };

  fetchPhotos() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          photos: data,
          isLoading: false,
        })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  render() {
    const { isLoading, photos, error } = this.state;
    return (
      <div>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          photos.map((photo) => {
            const { title, url, thumbnailUrl } = photo;
            return (
              <div key={title}>
                <img src={url} />
                <p>URL: {url}</p>
                <button onClick={thumbnailUrl}>See Photo</button>
                <a href={thumbnailUrl}>Click to see photo</a>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default PhotosList;
