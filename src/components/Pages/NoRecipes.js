import './style/NoContentPage.css';
import React from 'react';

function NoRecipes()
{
    return(
        <div className='no-recipes-page'>
            <div className='message'>No Recipes found. </div>
            <div className='message'>Maybe make your own? </div>
        </div>
    );
}

export default NoRecipes;