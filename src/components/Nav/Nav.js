import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <nav className='nav'>
                <h3 className='logo'>Logo</h3>
                <ul className='nav-list'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Recipes</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;