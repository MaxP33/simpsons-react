import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import QuoteApi from './components/QuoteApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ''
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quotes: data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteApi quotes={this.state.quotes}/>
        <button type="button" onClick={this.getQuote}>Get a quote</button>
      </div>
    );
  }
}

export default App;
