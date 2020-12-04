import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className='nav'>
            <Link to='/'><img className='logo' src='logo.png' alt='T_T' /></Link>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;