import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function CategoryRecipes(props) 
{
    const category = props.category;
    const [recipes, setRecipes] = useState([]);

    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    const [recipeNum, setRecipeNum] = useState(10);
    const moreRecipesHandler = () => setRecipeNum(recipeNum + 10);

    useEffect(() => {
        fetch(`/api/categories/${category}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setRecipes(data.meals);
                setLoading(false);
            });
    }, [category]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && category === null ? (
            <Page404 />
        ) : (
            <div className='category-recipes'>
                <div className='recipes-declaration'>{category} Recipes</div>
                <div className='recipes-list'>
                    {recipes.slice(0, recipeNum).map((recipe, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/name/${recipe.strMeal}`}>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                            </ Link>
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

export default CategoryRecipes;