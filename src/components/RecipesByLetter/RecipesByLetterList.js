import './RecipesByLetterList.css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import NoRecipes from './NoRecipes';

function RecipesByLetterList({match}) 
{
    const [meals, setMeals] = useState([]);
    const letter = match.params.letter;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(response => response.json())
        .then(result => {
            if(result.meals === null) return;
            setMeals(result.meals)
        });
    }, [letter])

    if(meals.length === 0) {return(<NoRecipes />)}

    return(
        <div className='letter-recipes'>
            <div className='letter-recipes-declaration'>Recipes starting with the letter {letter.toUpperCase()}</div>
            <div className='letter-recipe-list'>
                {meals.slice(0,10).map((meal, index) => (
                    <div className='letter-recipe' key={index}>
                        <Link to={`/recipes/${meal.strMeal}`}>
                        <div className={`recipe-${index}`}>
                            <div className='letter-recipe-name'>{meal.strMeal}</div>
                            <img className='letter-recipe-image' src={meal.strMealThumb} alt='T_T'/>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipesByLetterList;