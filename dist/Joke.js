'use strict';

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

  getJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: { 
          'Accept': 'application/json'
        }
      }
    )
    .then(result => {
      if (result.ok) {
        console.log('ok');
      } else {
        console.log('failed')
      }
      return result.json();
    })
    .then(data => {
      this.updateJoke('“' + data.joke + '”');
    })
    .catch(error => {
      console.log(error);
      this.updateJoke('Sorry, something went wrong. :(');
    })
  }

  componentDidMount() {
    this.getJoke();
  };

  hello(){

  }

  render() {
    const joke = this.state.joke;

    return e(
      'div',
      null,
      [
        e('h5', {key: 1, className: 'font-italic'}, joke),
        e('div', {key: 2, className: 'small'}, '— /icanhazdadjoke.com'),
        e('button', { onClick: () => this.getJoke(), className: 'btn btn-warning mt-3', key: 3 }, 'Uno mas')
      ]
    );
  }
}

const domContainer = document.querySelector('#js_joke');
ReactDOM.render(e(Joke), domContainer);