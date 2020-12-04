import React from 'react';
import CategoriesList from '../Category/CategoriesList';
import FindRecipes from '../FindRecipes/FindRecipes';

function Home() 
{
    return(
        <div className='home-page'>
            <h2>HOME</h2>
            <p className='welcome-text'>Welcome to the food site.</p>
            <CategoriesList />
            <FindRecipes />
        </div>
    )
}

export default Home;