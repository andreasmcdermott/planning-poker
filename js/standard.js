import React from 'react';
import Cards from './cards';

export default class Standard extends React.Component {
  render () {
    return <Cards options={['0', '1/2', '1', '2', '3', '5',
      '8', '13', '20', '40', '100', '?']} />;
  }
};
