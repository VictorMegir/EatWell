import './Nav.css';
import logo from './logo.png';
import blurp from './blurp.png'
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    const [name, setName] = useState("");

    return(
        <nav className='nav'>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
                <li>
                    <form className='searchbar' action={`/recipes/${name}`} >
                        <input className='search-text' 
                            type='text' 
                            placeholder='Search for a Recipe...' 
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            required />
                        <input type='submit' className='search-button' value='Search'/>
                    </form>
                </li>
            </ul>
            <Link to='/'>
            <img className='logo' src={logo} alt='T_T'/>
            <img className='blurp' src={blurp} alt='T_T'/>
            </Link>
        </nav>
    );
}

export default Nav;