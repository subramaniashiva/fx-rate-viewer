import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class LoadingSpinner extends Component {
  render() {
    return (
      <CircularProgress size={50}></CircularProgress>
    );
  }
}
