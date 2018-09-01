import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import {appendCurrentNumber} from '../redux/reducers/current-number';
import {loadRates} from '../redux/reducers/rates';
// import {setLoading} from '../redux/reducers/loading';

type Props = {
  currentNumber: string,
  loading: boolean,
  dispatch: Function,
  rates: Object
};

class App extends Component<Props> {
  handleButtonClick() {
    this.props.dispatch(appendCurrentNumber('1'));
    // this.props.dispatch(setLoading(!this.props.loading));
    this.props.dispatch(loadRates());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Revolut</h1>
        </header>
        <p className="App-intro">
          Current Number: {this.props.currentNumber}
        </p>
        <button onClick={this.handleButtonClick.bind(this)}>
          Append Number
        </button>
        <p>Loading status: {this.props.loading.toString()}</p>
        <p>Data from back-end: {this.props.rates.base}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNumber: state.currentNumber,
    loading: state.loading,
    rates: state.rates,
  };
}

export default connect(mapStateToProps)(App);
