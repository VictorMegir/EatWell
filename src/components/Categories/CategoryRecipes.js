import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function CategoryRecipes(props) 
{
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const category = props.category;

    setTimeout(() => setLoading(false), 5000);

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
        )}
        </>
    );
}

export default CategoryRecipes;