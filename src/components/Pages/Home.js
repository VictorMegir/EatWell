import React from 'react';
import CategoriesList from '../Categories/CategoriesList';
import IngredientsList from '../Ingredients/IngredientsList';
import RandomRecipes from '../RandomRecipes/RandomRecipes';
import RecipesByLetter from '../RecipesByLetter/RecipesByLetter';

function Home() 
{
    return(
        <div className='home-page'>
            <h2>HOME</h2>
            <p className='welcome-text'>Welcome to the food site.</p>
            <RandomRecipes />
            <CategoriesList />
            <IngredientsList />
            <RecipesByLetter />
        </div>
    )
}

export default Home;