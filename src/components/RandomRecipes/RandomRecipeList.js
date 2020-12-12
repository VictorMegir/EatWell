import React from 'react';
import RandomRecipe from './RandomRecipe';

function RandomRecipesList() 
{
    return(
        <div className='random-recipes'>
            <div className='recipes-declaration'>Try out some of these recipes</div>
            <div className='recipes-list'>
                <RandomRecipe />
                <RandomRecipe />
                <RandomRecipe />
                <RandomRecipe />
                <RandomRecipe />
            </div>
        </div>
    )
}

export default RandomRecipesList;