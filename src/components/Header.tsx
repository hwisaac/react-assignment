import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
     <Link to ='/'>Home</Link> 
     <Link to ='/products'>Products</Link> 
    </header>
  )
}

export default Header
