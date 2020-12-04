import React from 'react';
import CategoriesList from '../Categories/CategoriesList';
import IngredientsList from '../Ingredients/IngredientsList';
import RandomRecipes from '../RandomRecipes/RandomRecipeList';
import RecipesByLetter from '../RecipesByLetter/RecipesByLetter';
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes';
import AreasList from '../Areas/AreasList';

function Home() 
{
    return(
        <div className='home-page'>
            <h2>HOME</h2>
            <p className='welcome-text'>Welcome to the food site.</p>
            <FeaturedRecipes />
            <RandomRecipes />
            <CategoriesList />
            <IngredientsList />
            <AreasList />
            <RecipesByLetter />
        </div>
    )
}

export default Home;