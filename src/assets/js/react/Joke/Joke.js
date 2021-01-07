
// Just a little fun with React (wasn't really needed here)

import React from 'react';

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: null };
  }

  updateJoke(text){
    const newState = { joke: text };
    this.setState(newState);
  }

  generateErrorResponse(message){
    return {
      status: 'error',
      message
    }
  }

  // Enhancement: build out fetch util to support all request types and make standalone.
  
  async fetchData(url){
    const response = await fetch(url, { headers: { 'Accept': 'application/json' }});

    if (response.status !== 200 ){
      console.log(`fetch error: ${response.statusText}`);
      return this.generateErrorResponse('Sorry, the resource appears to be unavailable. Please check back.');
    }
    return await response.json();
  }

  async loadJoke(){
    const apiUrl = 'https://icanhazdadjoke.com/';
    const errorMessage = 'Sorry, something went wrong. Please check back.';

    try {
      const data = await this.fetchData(apiUrl);

      if (data.status === 'error'){
        this.updateJoke(data.message);
      } else {
        this.updateJoke('“' + data.joke + '”');
      }

    } catch (error) {
      console.log(`loadJoke try error: ${error}`);
      this.updateJoke(errorMessage);
    }
  }

  componentDidMount() {
    this.loadJoke();
  };

  render() {
    const joke = this.state.joke;

    return (
      <>
        <p>{joke}</p>
        <p>— icanhazdadjoke.com</p>
        <button onClick={() => this.loadJoke()} className='btn btn-warning mt-3'>Uno mas</button>
      </>
    )
  }
}

export default Joke;
