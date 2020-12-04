import React from 'react';
import IngredientRecipes from './IngredientRecipes';

function IngredientDetails({match, location})
{
    const ingredient = location.state.ingredient;

    return (
        <div className='ingredient-page'>
            <h3 className='ingredient-name'>{ingredient.strIngredient}</h3>
            <img className='ingredient-image' src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt='T_T' />
            <p className='ingredient-description'>{ingredient.strDescription}</p>
            <IngredientRecipes ingredient={ingredient.strIngredient}/>
        </div>
    );
}

export default IngredientDetails;