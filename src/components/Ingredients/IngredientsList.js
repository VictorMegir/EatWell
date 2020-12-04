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
        <div className='ingredients'>
            <h3 className='ingredients-declaration'>Ingredients</h3>
            {ingredients.slice(0, 10).map((ingredient, index) => (
                <Link to={
                    {
                        pathname: `/ingredients/${ingredient.strIngredient}`,
                        state: {ingredient}
                    }} key={index}>
                    <div className={`ingredient-${index}`}>
                        <img className='ingredient-thumbnail' src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt='T_T'/>
                        <div className='ingredient-name'>{ingredient.strIngredient}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default IngredientsList;