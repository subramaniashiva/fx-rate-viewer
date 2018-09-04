import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loading-spinner.component.css';

type Props = {};

export default class LoadingSpinner extends Component<Props> {
  render() {
    return (
      <div className="loading-spinner-container">
        <CircularProgress size={50}></CircularProgress>
        <p>Loading data. Please wait...</p>
      </div>
    );
  }
}
