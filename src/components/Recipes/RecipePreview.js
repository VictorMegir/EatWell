import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function RecipePreview(props)
{
    const recipeName = props.name;
    const [recipe, setRecipe] = useState([]);

    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    useEffect(() => {
        fetch(`/api/recipes/name/${recipeName}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setRecipe(data.meals[0])
                setLoading(false);
            })
    }, [recipeName]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && recipe.length === 0 ? (
            <Page404 />
        ) : (
            <div className='recipe'>
                <Link to={`/recipes/name/${recipeName}`}>
                <div className='recipe-name'>{recipeName}</div>
                <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                </Link>
            </div>
        )}
        </>
    );
}

export default RecipePreview;