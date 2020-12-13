import './style/ByLetter.css';
import React from 'react';
import {Link} from 'react-router-dom';

function RecipesByLetter() 
{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className='recipes-by-letter'>
            <div className='letter-declaration'>Search Recipes by name</div>
            <ul className='letter-list'>
                {alphabet.map((letter, index) => (
                    <li key={index}>
                        <Link to={`/categories/letter/${letter}`}>
                        {letter.toUpperCase()}
                        </Link>
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default RecipesByLetter;