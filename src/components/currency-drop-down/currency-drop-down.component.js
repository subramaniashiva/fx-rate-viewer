import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMoreSharp';

import './currency-drop-down.component.css';
import type {Currency} from '../../types/currency.type';

type Props = {
  selectedCurrency?: Currency,
  currenciesList?: Array<Currency>,
  onCurrencySelected?: (selectedCurrency: Currency) => void
};

type State = {
  localStateCurrentCurrency?: Currency,
};

export default class CurrencyDropDown extends Component<Props, State> {

  static defaultProps = {
    selectedCurrency: undefined,
    currenciesList: [],
    onCurrencySelected: () => null,
  };

  constructor(props: Props) {
    super(props);
    this.state.localStateCurrentCurrency = props.selectedCurrency;
  }

  // We need a local state since the material select gives back
  // only the text selected and not the object
  state: State = {
    localStateCurrentCurrency: undefined,
  };

  // When receiving new props, update the local state
  componentDidUpdate(prevProps: Props) {
    let prevCurrency: Currency;
    let currentCurrency: Currency;
    if (prevProps.selectedCurrency) {
      prevCurrency = prevProps.selectedCurrency;
    }
    if (this.props.selectedCurrency) {
      currentCurrency = this.props.selectedCurrency;
    }

    if (prevCurrency && currentCurrency &&
      prevCurrency.name !== currentCurrency.name) {
      this.setState({
        localStateCurrentCurrency: this.props.selectedCurrency,
      });
    }
  }

  // On user selecting a currency
  // emit the event onCurrencySelected
  handleChange(event: any) {
    const selectedValue: Currency | void = this.props.currenciesList &&
      this.props.currenciesList.find(
        (item: Currency) => (item.name === event.target.value));

    if (selectedValue) {
      this.setState({
        localStateCurrentCurrency: selectedValue,
      });
      if (this.props.onCurrencySelected) {
        this.props.onCurrencySelected(selectedValue);
      }
    }
  }

  render() {
    const {localStateCurrentCurrency} = this.state;
    const {currenciesList} = this.props;

    return (
      <div className="currency-drop-down-container">
        <Select
          className="currency-drop-down"
          IconComponent={ExpandMore}
          value={localStateCurrentCurrency && localStateCurrentCurrency.name}
          onChange={this.handleChange.bind(this)}
        >
          {
            currenciesList &&
            currenciesList.map((item, index) => (
              <MenuItem
                key={index}
                value={item.name}
              >{item.name}</MenuItem>
            ))
          }
        </Select>
      </div>
    );
  }
}
