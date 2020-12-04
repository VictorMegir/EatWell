import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Page404 from '../Pages/Page404';

function AreaRecipes({match})
{
    const area = match.params.area;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        .then(response => response.json())
        .then(result => setRecipes(result.meals));
    }, [area]);

    if (recipes === null) {
        return(<Page404 />);
    };

    return(
        <div className='area-page'>
            <h3>{area} Recipes</h3>
            {recipes.map((recipe, index) => (
                <Link to={`/recipes/${recipe.strMeal}`} key={index}>
                <div className='area-recipe-name'>{recipe.strMeal}</div>
                <img className='area-recipe-image' src={recipe.strMealThumb} alt='T_T' />
                </Link>
            ))}
        </div>

    );
}

export default AreaRecipes;