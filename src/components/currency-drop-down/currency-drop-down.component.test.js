import React from 'react';
import {shallow} from 'enzyme';

import CurrencyDropDown from './currency-drop-down.component';

import currenciesList from '../../config/currencies-list.config';

describe('Currency Drop Down component', () => {
  it('should render the component', () => {
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
        onCurrencySelected={() => null}
      ></CurrencyDropDown>
    );
    expect(component).toBeTruthy();
  });

  it('should have the selected currency', () => {
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );
    expect(component.instance().props.selectedCurrency)
      .toEqual(currenciesList[0]);
  });

  it('should have the default selected currency as undefined', () => {
    const component = shallow(
      <CurrencyDropDown
      ></CurrencyDropDown>
    );
    expect(component.instance().props.selectedCurrency)
      .toEqual(undefined);
  });

  it('should have the default currencies list as empty', () => {
    const component = shallow(
      <CurrencyDropDown
      ></CurrencyDropDown>
    );
    expect(component.instance().props.currenciesList)
      .toEqual([]);
  });

  it('should have the default current value state as undefined', () => {
    const component = shallow(
      <CurrencyDropDown
      ></CurrencyDropDown>
    );
    expect(component.instance().state.localStateCurrentCurrency)
      .toEqual(undefined);
  });

  it('should set the state with selected currency', () => {
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );
    expect(component.instance().state.localStateCurrentCurrency)
      .toEqual(currenciesList[0]);
  });

  it('should update the selected currency', () => {
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    component.setProps({selectedCurrency: currenciesList[1]})
    expect(component.instance().props.selectedCurrency)
      .toEqual(currenciesList[1]);
  });

  it('should update the local state', () => {
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    component.setProps({selectedCurrency: currenciesList[1]})
    expect(component.instance().state.localStateCurrentCurrency)
      .toEqual(currenciesList[1]);
  });

  it('should call the on currency selected function', () => {
    const mockOnCurrencySelected = jest.fn();
    const value = currenciesList[1].name;
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
        onCurrencySelected={mockOnCurrencySelected}
      ></CurrencyDropDown>
    );
    component.instance().handleChange({target: {value}});
    expect(mockOnCurrencySelected).toHaveBeenCalledWith(currenciesList[1]);

  });

  it('should not call the on currency selected function', () => {
    const mockOnCurrencySelected = jest.fn();
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
        onCurrencySelected={mockOnCurrencySelected}
      ></CurrencyDropDown>
    );
    component.instance().handleChange({target: {value: ''}});
    expect(mockOnCurrencySelected).not.toHaveBeenCalledWith(currenciesList[1]);

  });
});
