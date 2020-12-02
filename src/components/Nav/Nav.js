import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <nav className='nav'>
                <h3 className='logo'>Logo</h3>
                <ul className='nav-list'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/recipes'><li>Find Recipes</li></Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;