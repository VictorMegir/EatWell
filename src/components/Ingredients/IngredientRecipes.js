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
        <div className='ingredients-recipes'>
            <div className='recipes-declaration'>Recipes containing {ingredient}</div>
            <div className='recipes-list'>
                {recipes.slice(0,10).map((recipe, index) => (
                    <div className='recipe' key={index}>
                        <Link to={`/recipes/${recipe.strMeal}`}>
                        <div className='recipe-name'>{recipe.strMeal}</div>
                        <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IngredientRecipes;