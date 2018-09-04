import React from 'react';
import {shallow} from 'enzyme';

import LoadingSpinner from './loading-spinner.component';

describe('Loading Spinner Component', () => {
  it('should render the component', () => {
    // Arrange
    const component = shallow(
      <LoadingSpinner></LoadingSpinner>
    );

    // Assert
    expect(component).toBeTruthy();
  });
});
