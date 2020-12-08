import './Featured.css'
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
            <div className='featured-recipes-declaration'>Featured Recipes</div>
            <div className='featured-recipes-list'>
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
        </div>
    );
}

export default FeaturedRecipesList;