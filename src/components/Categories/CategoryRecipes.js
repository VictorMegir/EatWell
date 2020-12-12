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
        <div className='category-recipes'>
            <div className='recipes-declaration'>{category} Recipes</div>
            <div className='recipes-list'>
                {recipes.slice(0, 10).map((recipe, index) => (
                    <div className='recipe' key={index}>
                        <Link to={`/recipes/${recipe.strMeal}`}>
                        <div className='recipe-name'>{recipe.strMeal}</div>
                        <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                        </ Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryRecipes;