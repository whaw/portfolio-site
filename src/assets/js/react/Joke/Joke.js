import React from 'react';
const e = React.createElement;

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: null };
  }

  updateJoke(text){
    const newState = { joke: text };
    this.setState(newState);
  }

  handleLoadJokeClick(){
    this.loadJoke();
  }

  generateErrorResponse(message){
    return {
      status: 'error',
      message
    }
  }

  async fetchJoke(){
    const response = await fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' }});

    if (response.status !== 200 ){
      console.log(`fetch error: ${response.statusText}`);
      return this.generateErrorResponse('Sorry, please try again, icanhazdadjoke.com is not responding.');
    }
    return response.json();
  }

  async loadJoke(){
    const errorMessage = 'Sorry, something went wrong. Please check back.';

    try {
      const data = await this.fetchJoke();

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

    return e(
      'div',
      null,
      [
        e('p', {key: 1, className: 'font-italic'}, joke),
        e('p', {key: 2 }, '— icanhazdadjoke.com'),
        e('button', { onClick: () => this.loadJoke(), className: 'btn btn-warning mt-3', key: 3, id: 'get-joke-button' }, 'Uno mas')
      ]
    );
  }
}

export default Joke;