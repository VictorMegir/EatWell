import React from 'react';
import RandomRecipe from '../RandomRecipes/RandomRecipe'
import Recipe from '../Recipes/RecipePreview';

function FeaturedRecipesList()
{
    const hardCodedRecipeNames = [
        'Sugar Pie',
        'Pumpkin Pie',
        'Choc Chip Pecan Pie',
        'Christmas cake',
        'Banana Pancakes'
    ];
    
    return(
        <div className='featured-recipes'>
            <h3>Featured Recipes</h3>
            <Recipe name={hardCodedRecipeNames[0]} />
            <RandomRecipe />
            <Recipe name={hardCodedRecipeNames[1]} />
            <RandomRecipe />
            <Recipe name={hardCodedRecipeNames[2]} />
            <RandomRecipe />
            <Recipe name={hardCodedRecipeNames[3]} />
            <RandomRecipe />
            <Recipe name={hardCodedRecipeNames[4]} />
            <RandomRecipe />
        </div>
    );
}

export default FeaturedRecipesList;