import React from 'react'
import Cards from './cards'

const TShirts = (props) => (
  <Cards options={['XS', 'S', 'M', 'L', 'XL', 'XXL']} {...props}/>
)

export default TShirts