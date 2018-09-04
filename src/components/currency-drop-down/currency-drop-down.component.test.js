import React from 'react';
import {shallow} from 'enzyme';

import CurrencyDropDown from './currency-drop-down.component';

import currenciesList from '../../config/currencies-list.config';

describe('Currency Drop Down component', () => {
  it('should render the component', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    // Assert
    expect(component).toBeTruthy();
  });

  it('should have the selected currency', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    // Assert
    expect(component.instance().props.selectedCurrency)
      .toEqual(currenciesList[0]);
  });

  it('should have the default selected currency as undefined', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
      ></CurrencyDropDown>
    );

    // Assert
    expect(component.instance().props.selectedCurrency)
      .toEqual(undefined);
  });

  it('should have the default currencies list as empty', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
      ></CurrencyDropDown>
    );

    // Assert
    expect(component.instance().props.currenciesList)
      .toEqual([]);
  });

  it('should have the default current value state as undefined', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
      ></CurrencyDropDown>
    );

    // Assert
    expect(component.instance().state.localStateCurrentCurrency)
      .toEqual(undefined);
  });

  it('should set the state with selected currency', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    // Assert
    expect(component.instance().state.localStateCurrentCurrency)
      .toEqual(currenciesList[0]);
  });

  it('should update the selected currency', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    // Act
    component.setProps({selectedCurrency: currenciesList[1]});

    // Assert
    expect(component.instance().props.selectedCurrency)
      .toEqual(currenciesList[1]);
  });

  it('should update the local state', () => {
    // Arrange
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
      ></CurrencyDropDown>
    );

    // Act
    component.setProps({selectedCurrency: currenciesList[1]});

    // Assert
    expect(component.instance().state.localStateCurrentCurrency)
      .toEqual(currenciesList[1]);
  });

  it('should call the on currency selected function', () => {
    // Arrange
    const mockOnCurrencySelected = jest.fn();
    const value = currenciesList[1].name;
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
        onCurrencySelected={mockOnCurrencySelected}
      ></CurrencyDropDown>
    );

    //Act
    component.instance().handleChange({target: {value}});

    // Assert
    expect(mockOnCurrencySelected).toHaveBeenCalledWith(currenciesList[1]);

  });

  it('should not call the on currency selected function', () => {
    // Arrange
    const mockOnCurrencySelected = jest.fn();
    const component = shallow(
      <CurrencyDropDown
        selectedCurrency={currenciesList[0]}
        currenciesList={currenciesList}
        onCurrencySelected={mockOnCurrencySelected}
      ></CurrencyDropDown>
    );

    // Act
    component.instance().handleChange({target: {value: ''}});

    // Assert
    expect(mockOnCurrencySelected).not.toHaveBeenCalledWith(currenciesList[1]);

  });
});
