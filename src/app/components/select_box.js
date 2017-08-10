import React, { Component } from 'react';


class SelectBoxCat extends Component {
  render() {
    return (
      <option value={this.props.name} key={this.props.k}>Value 3</option>
    );
  }
}

export default SelectBoxCat;
