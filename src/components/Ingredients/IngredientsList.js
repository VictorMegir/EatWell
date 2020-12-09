import './IngredientsList.css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function IngredientsList()
{
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(response => response.json())
        .then(result => setIngredients(result.meals))
    }, []);

    return(
        <div className='ingredients' id='ingredients'>
            <div className='ingredients-declaration'>Search by Ingredient</div>
            <div className='ingredient-list'>
                {ingredients.slice(0, 10).map((ingredient, index) => (
                    <div className='ingredient' key={index}>
                        <Link to={
                            {
                                pathname: `/ingredients/${ingredient.strIngredient}`,
                                state: {ingredient}
                            }}>                            
                            <img className='ingredient-thumbnail' src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt='T_T'/>
                            <div className='ingredient-name'>{ingredient.strIngredient}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IngredientsList;