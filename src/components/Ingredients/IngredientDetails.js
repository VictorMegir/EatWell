import './style/IngredientDetails.css';
import React from 'react';
import IngredientRecipes from './IngredientRecipes';
import Page404 from '../Pages/Page404';

function IngredientDetails({match, location})
{
    const ingredient = location.state.ingredient;

    return (
        <>
        {location.state === undefined ? (
            <Page404 />
        ) : (
            <div className='ingredient-page'>
                <div className='ingredient-name'>{ingredient.strIngredient}</div>
                <img className='ingredient-image' src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt='T_T' />
                <p className='ingredient-description'>{ingredient.strDescription}</p>
                <IngredientRecipes ingredient={ingredient.strIngredient}/>
            </div>
        )}
        </>
    );
}

export default IngredientDetails;