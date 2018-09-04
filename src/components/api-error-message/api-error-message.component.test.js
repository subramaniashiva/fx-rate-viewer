import React from 'react';
import {shallow} from 'enzyme';

import ApiErrorMessage from './api-error-message.component';

describe('Api Error Message Component', () => {
  it('should render the component', () => {
    // Arrange
    const component = shallow(
      <ApiErrorMessage></ApiErrorMessage>
    );

    // Assert
    expect(component).toBeTruthy();
  });
});
