import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Page404 from '../Pages/Page404';

function SearchRecipes({match})
{
    const [meals, setMeals] = useState([]);
    const input = match.params.input;

    useEffect(() => {
        fetch(`/${input}`)
            .then(response => response.json())
            .then(result => {
                if(result.meals === null) return;
                setMeals(result.meals)
            });
    }, [input]);

    if(meals.length === 0) {<Page404 />}
    console.log(meals)
    return(
        <>
        <div className='recipes-declaration'>Search results for {input}.</div>
        <div className='recipes-list'>
            {meals.map((meal, index) => (
                <div className='recipe' key={index}>
                    <Link to={`/recipes/${meal.strMeal}`}>
                    <div className='recipe-name'>{meal.strMeal}</div>
                    <img className='recipe-image' src={meal.strMealThumb} alt='T_T'/>
                    </Link>
                </div>
            ))}
        </div>
        </>
    );
}

export default SearchRecipes;