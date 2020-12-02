import React, { useEffect, useState } from 'react';

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
            <h2 className='name'>{meal.strMeal}</h2>
            <img className='image' src={meal.strMealThumb} alt='T_T'></img>
        </div>
    )
}

export default RandomRecipe;