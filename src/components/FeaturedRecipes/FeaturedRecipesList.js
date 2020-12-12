import React from 'react';
import RandomRecipe from '../RandomRecipes/RandomRecipe'
import Recipe from '../Recipes/RecipePreview';

function FeaturedRecipesList()
{
    const hardCodedRecipes = [
        'Choc Chip Pecan Pie',
        'Sugar Pie',
        'Pumpkin Pie',
        'Christmas cake',
        'Banana Pancakes'
    ];
    
    return(
        <div className='recipes'>
            <div className='recipes-declaration'>Top Recipes</div>
            <div className='recipes-list'>
                <Recipe name={hardCodedRecipes[0]} />
                <RandomRecipe />
                <Recipe name={hardCodedRecipes[1]} />
                <RandomRecipe />
                <Recipe name={hardCodedRecipes[2]} />
                <RandomRecipe />
                <Recipe name={hardCodedRecipes[3]} />
                <RandomRecipe />
                <Recipe name={hardCodedRecipes[4]} />
                <RandomRecipe />
            </div>
        </div>
    );
}

export default FeaturedRecipesList;