import './style/Home.css';
import React from 'react';
import CategoriesList from '../Categories/CategoriesList';
import IngredientsList from '../Ingredients/IngredientsList';
import RandomRecipesList from '../RandomRecipes/RandomRecipeList';
import FeaturedRecipesList from '../FeaturedRecipes/FeaturedRecipesList';
import AreasList from '../Areas/AreasList';

function Home() 
{
    return(
        <div className='home-page'>
            <div className='welcome-declaration'>Welcome to EatWell</div>
            <p className='welcome-text'>
                Need an idea for a recipe?<br/>
                Check our top recipes or search for one you like, based on the <a href='#category'>category</a>, the <a href='#ingredients'>ingredients</a> or the <a href='#country'>country</a> of origin.
            </p>
            <FeaturedRecipesList />
            <RandomRecipesList />
            <CategoriesList />
            <IngredientsList />
            <AreasList />
        </div>
    )
}

export default Home;