import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function RandomRecipe()
{
    const [meal, setMeal] = useState([]);
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(result => setMeal(result.meals[0]));
    }, [])

    return(
        <div className='random-recipe'>
            <Link to={`/recipes/${meal.strMeal}`}>
            <h2 className='random-recipe-name'>{meal.strMeal}</h2>
            <img className='random-recipe-image' src={meal.strMealThumb} alt='T_T'></img>
            </Link>
        </div>
    )
}

export default RandomRecipe;