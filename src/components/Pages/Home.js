import React from 'react';
import CategoriesList from '../Categories/CategoriesList';
import IngredientsList from '../Ingredients/IngredientsList';
import RandomRecipesList from '../RandomRecipes/RandomRecipeList';
import RecipesByLetter from '../RecipesByLetter/RecipesByLetter';
import FeaturedRecipesList from '../FeaturedRecipes/FeaturedRecipesList';
import AreasList from '../Areas/AreasList';

function Home() 
{
    return(
        <div className='home-page'>
            <div className='welcome-declaration'>Welcome</div>
            <p className='welcome-text'>Welcome to the food site.</p>
            <FeaturedRecipesList />
            <RandomRecipesList />
            <CategoriesList />
            <IngredientsList />
            <AreasList />
            <RecipesByLetter />
        </div>
    )
}

export default Home;