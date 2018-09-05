import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

import './currency-text-box.component.css';

type Props = {
  currencyValue: string,
  onCurrencyValueChanged?: (value: string) => void
};

type State = {
  localStateCurrencyValue: string,
};

export default class CurrencyTextBox extends Component<Props, State> {
  static defaultProps = {
    currencyValue: '',
    onCurrencyValueChanged: () => {},
  };

  constructor(props: Props) {
    super(props);
    this.state.localStateCurrencyValue = props.currencyValue;
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.currencyValue !== this.props.currencyValue) {
      this.updateLocalState(this.props.currencyValue);
    }
  }

  // Default state
  // We store the value in state to make this a controlled component
  state: State = {
    localStateCurrencyValue: '',
  };

  updateLocalStateAndPropagate(value: string) {
    this.updateLocalState(value);
    this.propagateValueChange(value);
  }

  updateLocalState(value: string) {
    this.setState({
      localStateCurrencyValue: value,
    });
  }

  propagateValueChange(value: string) {
    if (this.props.onCurrencyValueChanged) {
      this.props.onCurrencyValueChanged(value);
    }
  }

  /*
    Function to validate decimal.
    If integer is passed, it updates state and propagates the value.
    If float is passed, it checks if the float is valid and
    updates state and propagates value
  */
  validateFloatAndUpdate(value: string) {
    const split = value.split('.');
    if (split.length === 1
      && !isNaN(Number(split[0]))
      && Number(split[0]) < Number.MAX_SAFE_INTEGER) {
      this.updateLocalStateAndPropagate(value);
    } else if (split.length === 2) {
      if (split[1] === '') {
        this.updateLocalState(value);
      } else if (!isNaN(Number(value)) && split[1].length <= 2) {
        this.updateLocalStateAndPropagate(value);
      }
    }
  }

  handleChange(event: any) {
    let value: string = event.target.value.trim();
    if (value === '') {
      this.updateLocalStateAndPropagate(value);
      return;
    }
    (value === '.') ?
      this.updateLocalState(value):
      this.validateFloatAndUpdate(value);
  }

  render() {
    return (
      <div className="currency-text-box-container">
        <TextField
          placeholder={'0'}
          value={this.state.localStateCurrencyValue}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
