import React from 'react';
import Cards from './cards';

export default class TShirt extends React.Component {
  render() {
    return <Cards options={['XS', 'S', 'M', 'L', 'XL', 'XXL']} />;
  }
}
