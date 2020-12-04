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

  getJoke(secondJoke = false){
    fetch('https://icanhazdadjoke.com/', {
      headers: { 
          'Accept': 'application/json'
        }
      }
    )
    .then(result => {
      if (result.ok) {
        console.log('joke ok');
      } else {
        console.log('joke failed')
      }
      return result.json();
    })
    .then(data => {
      this.updateJoke('“' + data.joke + '”');
    })
    .catch(error => {
      console.log(error);
      this.updateJoke('Sorry, something went wrong. Please check back. :(');
    })
    if (secondJoke === true) {
      $('#get-joke-button').addClass('d-none');
    }
  }

  componentDidMount() {
    this.getJoke();
  };

  render() {
    const joke = this.state.joke;

    return e(
      'div',
      null,
      [
        e('p', {key: 1, className: 'font-italic'}, joke),
        e('p', {key: 2 }, '— icanhazdadjoke.com'),
        e('button', { onClick: () => this.getJoke(true), className: 'btn btn-warning mt-3', key: 3, id: 'get-joke-button' }, 'Uno mas')
      ]
    );
  }
}

export default Joke;