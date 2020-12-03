import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function CategoryRecipe(props) 
{
    const [recipes, setRecipes] = useState([]);
    const ass = props.category;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ass}`)
        .then(response => response.json())
        .then(result => setRecipes(result.meals));
    }, [ass]);

    return(
        <div className='category-recipe-list'>
            {recipes.map((recipe, index) => (
                <Link to={`/recipes/${recipe.strMeal}`} key={index}>
                <div className='category-recipe'>
                    <div className='category-recipe-name'>{recipe.strMeal}</div>
                    <img className='category-recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                </div>
                </ Link>
            ))}
        </div>
    );
}

export default CategoryRecipe;