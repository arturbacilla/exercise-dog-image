import React, { Component } from 'react'

class DogPics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogsAPI: undefined,
    };
  }

  componentDidMount() {
    this.fetchDogAPI();
  }

  fetchDogAPI = async () => {
    const fecthedAPI = await fetch('https://dog.ceo/api/breeds/image/random');
    const fetchedObj = await fecthedAPI.json();
    this.setState({ dogsAPI: fetchedObj });
  };

  render() {
    const { dogsAPI } = this.state;
    return (
      <div>
        { dogsAPI === undefined ? <span> Loading... </span> : <img src={dogsAPI.message} alt="" /> }        
      </div>
    );
  }
}

export default DogPics;
