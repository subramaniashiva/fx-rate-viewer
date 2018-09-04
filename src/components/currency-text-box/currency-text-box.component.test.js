import React from 'react';
import {shallow} from 'enzyme';

import CurrencyTextBox from './currency-text-box.component';

describe('Currency Text Box Component', () => {
  it('should render the component', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox
        currencyValue={'1'}
      ></CurrencyTextBox>
    );

    // Assert
    expect(component).toBeTruthy();
  });

  it('should have the default currency value prop as 0', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox></CurrencyTextBox>
    );

    // Assert
    expect(component.instance().props.currencyValue)
      .toEqual('0');
  });

  it('should have the default currency value state as 0', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox></CurrencyTextBox>
    );

    // Aseert
    expect(component.instance().state.localStateCurrencyValue)
      .toEqual('0');
  });

  it('should set the currency value property', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox currencyValue={'100'}></CurrencyTextBox>
    );

    // Assert
    expect(component.instance().props.currencyValue)
      .toEqual('100');
  });

  it('should set the currency value local state', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox currencyValue={'100'}></CurrencyTextBox>
    );

    // Assert
    expect(component.instance().state.localStateCurrencyValue)
      .toEqual('100');
  });

  it('should update the local state', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox currencyValue={'100'}></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.updateLocalState('200');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('200');
  });

  it('should call the onCurrencyValueChanged function', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'100'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.propagateValueChange('200');

    // Assert
    expect(mockOnCurrencyValueChanged).toHaveBeenCalledWith('200');
  });

  it('should update the state and call the onCurrencyValueChanged function',
    () => {
      // Arrange
      const mockOnCurrencyValueChanged = jest.fn();

      const component = shallow(
        <CurrencyTextBox
          currencyValue={'100'}
          onCurrencyValueChanged={mockOnCurrencyValueChanged}
        ></CurrencyTextBox>
      );
      const instance = component.instance();

      // Act
      instance.updateLocalStateAndPropagate('200');

      // Assert
      expect(instance.state.localStateCurrencyValue).toEqual('200');
      expect(mockOnCurrencyValueChanged).toHaveBeenCalledWith('200');
    }
  );

  it('should validate the currency value and update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('100');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('100');
    expect(mockOnCurrencyValueChanged).toHaveBeenCalledWith('100');
  });

  it('should validate the currency value and not update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('foo');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('0');
    expect(mockOnCurrencyValueChanged).not.toHaveBeenCalled();
  });

  it('should validate the currency value and update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('1.2');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('1.2');
    expect(mockOnCurrencyValueChanged).toHaveBeenCalledWith('1.2');
  });

  it('should validate the currency value and update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('1.23');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('1.23');
    expect(mockOnCurrencyValueChanged).toHaveBeenCalledWith('1.23');
  });

  it('should validate the currency value and not update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('1.2.3');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('0');
    expect(mockOnCurrencyValueChanged).not.toHaveBeenCalled();
  });

  it('should validate the currency value and not update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('1.2w');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('0');
    expect(mockOnCurrencyValueChanged).not.toHaveBeenCalled();
  });

   it('should validate the currency value and not update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('1.23456');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('0');
    expect(mockOnCurrencyValueChanged).not.toHaveBeenCalled();
  });

  it('should validate the currency value and update state', () => {
    // Arrange
    const mockOnCurrencyValueChanged = jest.fn();

    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
        onCurrencyValueChanged={mockOnCurrencyValueChanged}
      ></CurrencyTextBox>
    );
    const instance = component.instance();

    // Act
    instance.validateFloatAndUpdate('.2');

    // Assert
    expect(instance.state.localStateCurrencyValue)
      .toEqual('.2');
    expect(mockOnCurrencyValueChanged).toHaveBeenCalledWith('.2');
  });

  it('should handle change and update state', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
      ></CurrencyTextBox>
    );
    const instance = component.instance();
    const spy = jest.spyOn(instance, 'updateLocalStateAndPropagate');

    // Act
    instance.handleChange({target:{value: ''}});

    // Assert
    expect(spy).toHaveBeenCalledWith('');
  });

  it('should handle change and update state', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
      ></CurrencyTextBox>
    );
    const instance = component.instance();
    const spy = jest.spyOn(instance, 'updateLocalState');

    // Act
    instance.handleChange({target:{value: '.'}});

    // Assert
    expect(spy).toHaveBeenCalledWith('.');
  });

  it('should handle change and update state', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
      ></CurrencyTextBox>
    );
    const instance = component.instance();
    const spy = jest.spyOn(instance, 'validateFloatAndUpdate');

    // Act
    instance.handleChange({target:{value: '1.2'}});

    // Assert
    expect(spy).toHaveBeenCalledWith('1.2');
  });

  it('should handle change and update state', () => {
    // Arrange
    const component = shallow(
      <CurrencyTextBox
        currencyValue={'0'}
      ></CurrencyTextBox>
    );
    const instance = component.instance();
    const spy = jest.spyOn(instance, 'updateLocalState');

    // Act
    instance.handleChange({target:{value: '      '}});

    // Assert
    expect(spy).toHaveBeenCalledWith('');
  });
});