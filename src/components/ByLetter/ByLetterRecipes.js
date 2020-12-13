import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import NoRecipes from '../Pages/NoRecipes';
import LoadingPage from '../Pages/LoadingPage';

function RecipesByLetterList({match}) 
{
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const letter = match.params.letter;

    setTimeout(() => setLoading(false), 5000);

    useEffect(() => {
        fetch(`/api/letter/${letter}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setMeals(data.meals);
                setLoading(false)
            });
    }, [letter]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && meals.length === 0 ? (
            <NoRecipes />
        ) : (
            <div className='letter-recipes'>
                <div className='recipes-declaration search'>Recipes starting with the letter {letter.toUpperCase()}</div>
                <div className='recipes-list'>
                    {meals.slice(0, 10).map((meal, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/${meal.strMeal}`}>
                            <div className={`recipe-${index}`}>
                                <div className='recipe-name'>{meal.strMeal}</div>
                                <img className='recipe-image' src={meal.strMealThumb} alt='T_T'/>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </>
    );
}

export default RecipesByLetterList;