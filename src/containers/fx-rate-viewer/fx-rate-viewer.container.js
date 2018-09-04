import React, {Component} from 'react';
import {connect} from 'react-redux';

import './fx-rate-viewer.container.css';

import CurrencyDropDown
  from '../../components/currency-drop-down/currency-drop-down.component';
import CurrencyTextBox
  from '../../components/currency-text-box/currency-text-box.component';
import LoadingSpinner
  from '../../components/loading-spinner/loading-spinner.component';

import currenciesList from '../../config/currencies-list.config';
import FX_RATES_API_FETCH_INTERVAL
  from '../../config/fx-rates-fetch-interval.config';
import CURRENCY_TYPES from '../../constants/currency-types.constants';

import {loadRates} from '../../redux/reducers/rates.reducer';
import {setPrimaryCurrency} from '../../redux/reducers/primary-currency.reducer';
import {setSecondaryCurrency}
  from '../../redux/reducers/secondary-currency.reducer';
import {setPrimaryCurrencyValue}
  from '../../redux/reducers/primary-currency-value.reducer';
import {setSecondaryCurrencyValue}
  from '../../redux/reducers/secondary-currency-value.reducer';

type Props = {
  currentNumber: string,
  loading: boolean,
  dispatch: Function,
  rates: Object,
  primaryCurrency: Object,
  secondaryCurrency: Object,
  primaryCurrencyValue: Number,
  secondaryCurrencyValue: Number,
};

class FxRateViewer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    props.dispatch(loadRates());

    setInterval(() => {
      props.dispatch(loadRates({showLoading: false}));
    }, FX_RATES_API_FETCH_INTERVAL);
  }

  handleCurrencyChanged(currencyType, currencyObj) {
    currencyType === CURRENCY_TYPES.PRIMARY_CURRENCY ?
      this.props.dispatch(setPrimaryCurrency(currencyObj)) :
      this.props.dispatch(setSecondaryCurrency(currencyObj));
  }

  handleCurrencyValueChanged(currencyType, currencyValue) {
    currencyType === CURRENCY_TYPES.PRIMARY_CURRENCY ?
      this.props.dispatch(setPrimaryCurrencyValue(Number(currencyValue))) :
      this.props.dispatch(setSecondaryCurrencyValue(Number(currencyValue)));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FX Converter</h1>
        </header>
        {
          this.props.loading ? (<LoadingSpinner/>):
            (
              (this.props.rates && this.props.rates.success) ?
                (<div>
                <div className="source-currency">
                  <CurrencyDropDown
                    currenciesList={currenciesList}
                    selectedCurrency={this.props.primaryCurrency}
                    onCurrencySelected=
                      {(currencyObj) => (this.handleCurrencyChanged(
                        CURRENCY_TYPES.PRIMARY_CURRENCY, currencyObj))}
                  ></CurrencyDropDown>

                  <CurrencyTextBox
                    currencyValue={this.props.primaryCurrencyValue.toString()}
                    onCurrencyValueChanged=
                      {
                        (currencyValue) =>
                          this.handleCurrencyValueChanged(
                            CURRENCY_TYPES.PRIMARY_CURRENCY, currencyValue)
                      }
                  ></CurrencyTextBox>
                </div>
                <div className="destination-currency">
                  <CurrencyDropDown
                    currenciesList={currenciesList}
                    selectedCurrency={this.props.secondaryCurrency}
                    onCurrencySelected=
                      {(currencyObj) => (this.handleCurrencyChanged(
                        CURRENCY_TYPES.SECONDARY_CURRENCY, currencyObj))}
                  ></CurrencyDropDown>

                  <CurrencyTextBox
                    currencyValue=
                      {this.props.secondaryCurrencyValue.toString()}
                    onCurrencyValueChanged=
                      {(currencyValue) => this.handleCurrencyValueChanged(
                        CURRENCY_TYPES.SECONDARY_CURRENCY, currencyValue)}
                  ></CurrencyTextBox>
                </div>
                </div>): (<div>
                  <p>
                    Unable to reach the server :(
                    Please check your internet connection.
                  </p>
                </div>)
            )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNumber: state.currentNumber,
    loading: state.loading,
    rates: state.rates,
    primaryCurrency: state.primaryCurrency,
    secondaryCurrency: state.secondaryCurrency,
    primaryCurrencyValue: state.primaryCurrencyValue,
    secondaryCurrencyValue: state.secondaryCurrencyValue,
  };
}

export default connect(mapStateToProps)(FxRateViewer);
