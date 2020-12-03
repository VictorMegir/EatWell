import React from 'react';
import RandomRecipe from '../Recipe/RandomRecipe';

function FindRecipes() 
{
    return(
        <div className='find-recipes'>
            <h2>Try out some of these recipes</h2>
            <div className='random-recipes-container'>
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