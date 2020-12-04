import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function IngredientRecipes(props)
{
    const [recipes, setRecipes] = useState([]);
    const ingredient = props.ingredient;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(result => setRecipes(result.meals));
    }, [ingredient]);

    return(
        <div>
            {recipes.map((recipe, index) => (
                <Link to={`/recipes/${recipe.strMeal}`} key={index}>
                <div className='ingredient-recipe'>
                    <div className='ingredient-recipe-name'>{recipe.strMeal}</div>
                    <img className='ingredient-recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default IngredientRecipes;