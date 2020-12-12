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

    return(
        <>
        {recipes === null ? (
            <Page404 />
        ) : (
            <div className='area-recipes'>
                <div className='recipes-declaration search'>{area} Recipes</div>
                <div className='recipes-list'>
                    {recipes.slice(0,10).map((recipe, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/${recipe.strMeal}`}>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <img className='recipe-image' src={recipe.strMealThumb} alt='T_T' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </>
    );
}

export default AreaRecipes;