import './ByLetter.css';
import React from 'react';
import {Link} from 'react-router-dom';

function RecipesByLetter() 
{
    return (
        <div className='recipes-by-letter'>
            <h3>Find Recipes by name</h3>
            <ul className='letter-list'>
                <li><Link to='/categories/letter/a'>A</Link></li>
                <li><Link to='/categories/letter/b'>B</Link></li>
                <li><Link to='/categories/letter/c'>C</Link></li>
                <li><Link to='/categories/letter/d'>D</Link></li>
                <li><Link to='/categories/letter/e'>E</Link></li>
                <li><Link to='/categories/letter/f'>F</Link></li>
                <li><Link to='/categories/letter/g'>G</Link></li>
                <li><Link to='/categories/letter/h'>H</Link></li>
                <li><Link to='/categories/letter/i'>I</Link></li>
                <li><Link to='/categories/letter/j'>J</Link></li>
                <li><Link to='/categories/letter/k'>K</Link></li>
                <li><Link to='/categories/letter/l'>L</Link></li>
                <li><Link to='/categories/letter/m'>M</Link></li>
                <li><Link to='/categories/letter/n'>N</Link></li>
                <li><Link to='/categories/letter/o'>O</Link></li>
                <li><Link to='/categories/letter/p'>P</Link></li>
                <li><Link to='/categories/letter/q'>Q</Link></li>
                <li><Link to='/categories/letter/r'>R</Link></li>
                <li><Link to='/categories/letter/s'>S</Link></li>
                <li><Link to='/categories/letter/t'>T</Link></li>
                <li><Link to='/categories/letter/u'>U</Link></li>
                <li><Link to='/categories/letter/v'>V</Link></li>
                <li><Link to='/categories/letter/w'>W</Link></li>
                <li><Link to='/categories/letter/x'>X</Link></li>
                <li><Link to='/categories/letter/y'>Y</Link></li>
                <li className='last-element'><Link to='/categories/letter/z'>Z</Link></li>
            </ul>
        </div>
    );
}

export default RecipesByLetter;