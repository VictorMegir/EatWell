import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className='nav'>
            <Link to='/'><img className='logo' src='logo.png' alt='T_T' /></Link>
            <ul className='nav-list'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/find'><li>Find Recipes</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;