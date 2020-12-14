import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import NoRecipes from '../Pages/NoRecipes';

function SearchRecipes({match})
{
    const input = match.params.input;
    const [recipes, setRecipes] = useState([]);
    
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    const [recipeNum, setRecipeNum] = useState(10);
    const moreRecipesHandler = () => setRecipeNum(recipeNum + 10);

    useEffect(() => {
        fetch(`/api/recipes/name/${input}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setLoading(false);
                setRecipes(data.meals);
            });
    }, [input]);

    return (
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && recipes.length === 0 ? (
            <NoRecipes />
        ) : (
            <div className='search-recipes'>
                <div className='recipes-declaration search'>Search results for {input}.</div>
                <div className='recipes-list'>
                    {recipes.slice(0, recipeNum).map((recipe, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/id/${recipe.idMeal}`}>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                            </Link>
                        </div>
                    ))}
                </div>
                {recipes.length > recipeNum ? (
                    <div className='button-container'>
                        <button className='button' onClick={moreRecipesHandler}>More Recipes</button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        )}
        </>
    );
}

export default SearchRecipes;