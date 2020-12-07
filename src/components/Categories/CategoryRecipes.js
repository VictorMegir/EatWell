import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function CategoryRecipes(props) 
{
    const [recipes, setRecipes] = useState([]);
    const category = props.category;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => response.json())
        .then(result => setRecipes(result.meals));
    }, [category]);

    return(
        <div className='category-recipe-list'>
            <h3>{category} Recipes</h3>
            {recipes.map((recipe, index) => (
                <div className='category-recipe' key={index}>
                    <Link to={`/recipes/${recipe.strMeal}`}>
                    <div className='category-recipe-name'>{recipe.strMeal}</div>
                    <img className='category-recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                    </ Link>
                </div>
            ))}
        </div>
    );
}

export default CategoryRecipes;