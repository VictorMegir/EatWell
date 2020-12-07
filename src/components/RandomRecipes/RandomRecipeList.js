import './Random.css';
import React from 'react';
import RandomRecipe from './RandomRecipe';

function FindRecipes() 
{
    return(
        <div className='find-recipes'>
            <h3>Try out some of these recipes</h3>
            <div className='random-recipes-list'>
                <RandomRecipe />
                <RandomRecipe />
                <RandomRecipe />
                <RandomRecipe />
                <RandomRecipe />
            </div>
        </div>
    )
}

export default FindRecipes;