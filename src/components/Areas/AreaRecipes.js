import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Page404 from '../Pages/Page404';
import LoadingPage from '../Pages/LoadingPage';

function AreaRecipes({match})
{
    const area = match.params.area;
    const [recipes, setRecipes] = useState([]);
    
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false));
    
    const [recipeNum, setRecipeNum] = useState(10);
    const moreRecipesHandler = () => setRecipeNum(recipeNum + 10);

    useEffect(() => {
        //fetch(`/api/areas/${area}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setRecipes(data.meals);
                setLoading(false);
            });
    }, [area]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && recipes === null ? (
            <Page404 />
        ) : (
            <div className='area-recipes'>
                <div className='recipes-declaration search'>{area} Recipes</div>
                <div className='recipes-list'>
                    {recipes.slice(0, recipeNum).map((recipe, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/id/${recipe.idMeal}`}>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <img className='recipe-image' src={recipe.strMealThumb} alt='T_T' />
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

export default AreaRecipes;