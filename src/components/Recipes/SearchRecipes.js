import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import NoRecipes from '../Pages/NoRecipes';

function SearchRecipes({match})
{
    const [recipes, setRecipes] = useState([]);
    const input = match.params.input;

    useEffect(() => {
        fetch(`/${input}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setRecipes(data.meals)
            });
    }, [input]);

    return (
        <>
        {recipes.length === 0 ? (
            <NoRecipes />
        ) : (
            <div className='search-recipes'>
                <div className='recipes-declaration search'>Search results for {input}.</div>
                <div className='recipes-list'>
                    {recipes.slice(0, 10).map((recipe, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/${recipe.strMeal}`}>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </>
    );
}

export default SearchRecipes;