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
            <Link to='/' className='logo-block'>
            <img className='logo' src={logo} alt='T_T'/>
            <img className='blurp' src={blurp} alt='T_T'/>
            </Link>
            <ul className='nav-list'>
                <li className='nav-item'><Link to='/'>Home</Link></li>
                <li className='nav-item'><Link to='/about'>About</Link></li>
                <li className='nav-item'><Link to='/contacts'>Contacts</Link></li>
                <li className='nav-item'>
                    <form className='searchbar' action={`/recipes/${name}`} >
                        <input className='search-text' 
                            type='text' 
                            placeholder='Search for a Recipe...' 
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            required />
                        <button type="submit" className='search-button'>
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;