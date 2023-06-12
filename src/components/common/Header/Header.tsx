import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <header className='header'>
        <div className="wrapper">
            <div className="logo">
                <h1>Blogpost page</h1>
            </div>
            <nav className="nav">
                <Link to='/'>Home</Link>
                <Link to='/new'>New Post</Link>
            </nav>
        </div>
    </header>
  )
}
