import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function RecipesByLetterList({match}) 
{
    const [meals, setMeals] = useState([]);
    const letter = match.params.letter;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(response => response.json())
        .then(result => setMeals(result.meals));
    }, [letter])

    return(
        <div className='recipes-by-letter-list'>
            {meals.map((meal, index) => (
                <Link to={`/recipes/${meal.strMeal}`} key={index}>
                <div className={`recipe-${index}`}>
                    <div className='recipe-name'>{meal.strMeal}</div>
                    <img className='recipe-thumbnail' src={meal.strMealThumb} alt='T_T'/>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default RecipesByLetterList;