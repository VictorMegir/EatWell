import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';

function RandomRecipe()
{
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState([]);
    
    setTimeout(() => setLoading(false), 5000);
    
    useEffect(() => {
        fetch('/api/random')
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setLoading(false);
                setRecipe(data.meals[0]);
            });
    }, [])

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : (
            <div className='recipe'>
                <Link to={`/recipes/id/${recipe.idMeal}`}>
                <div className='recipe-name'>{recipe.strMeal}</div>
                <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                </Link>
            </div>
        )}
        </>
    );
}

export default RandomRecipe;