import React from 'react';
import CategoriesList from '../Category/CategoriesList';
import FindRecipes from '../FindRecipes/FindRecipes';
import RecipesByLetter from '../RecipeByLetter/RecipesByLetter';

function Home() 
{
    return(
        <div className='home-page'>
            <h2>HOME</h2>
            <p className='welcome-text'>Welcome to the food site.</p>
            <CategoriesList />
            <FindRecipes />
            <RecipesByLetter />
        </div>
    )
}

export default Home;