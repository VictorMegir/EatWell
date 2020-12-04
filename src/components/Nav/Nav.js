import './Nav.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    const [name, setName] = useState("");

    return(
        <nav className='nav'>
            <Link to='/'><img className='logo' src='logo.png' alt='T_T' /></Link>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
                <li>
                    <form className='searchbar' action={`/categories/${name}`} >
                        <input className='search-text' 
                            type='text' 
                            placeholder='Search for a Recipe...' 
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        <input type='submit' className='search-button' value='Search'/>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;