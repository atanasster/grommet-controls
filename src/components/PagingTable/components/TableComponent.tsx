import React, { Component } from 'react';
import { StyledTableComponent } from '../StyledTableComponents';

export default class TableComponent extends Component {
  render() {
    return (
      <StyledTableComponent
        role='grid'
        {...this.props}
      />
    );
  }
}
