import React from 'react'
import Menu from './menu'

const App = ({children}) => (
  <div>
    <Menu/>
    {children}
  </div>
)

export default App