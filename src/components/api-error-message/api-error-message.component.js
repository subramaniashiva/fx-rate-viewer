import React, {Component} from 'react';
import './api-error-message.component.css';

type Props = {};

export default class ApiErrorMessage extends Component<Props> {
  render() {
    return (
      <div className="api-error-message-container">
        <p>Unable to reach the server :(</p>
        <p>Please check your internet connection.</p>
      </div>
    );
  }
}
