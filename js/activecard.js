import React from 'react';
import {Link} from 'react-router'

const ActiveCard = ({params, pathname, style}) => (
  <div className="activeCard"><Link style={style} to={pathname.split('/').slice(0, -1).join('/')}>{params.val}</Link></div>
)

export default ActiveCard