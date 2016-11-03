import React from 'react'
import Cards from './cards'

const Standards = (props) => (
  <Cards options={['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?']} {...props} />
)

export default Standards