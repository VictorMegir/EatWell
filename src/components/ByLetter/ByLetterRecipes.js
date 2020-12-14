import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import NoRecipes from '../Pages/NoRecipes';
import LoadingPage from '../Pages/LoadingPage';

function RecipesByLetterList({match}) 
{
    const letter = match.params.letter;
    const [recipes, setRecipes] = useState([]);
    
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    const [recipeNum, setRecipeNum] = useState(10);
    const moreRecipesHandler = () => setRecipeNum(recipeNum + 10);

    useEffect(() => {
        //fetch(`/api/letter/${letter}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setRecipes(data.meals);
                setLoading(false)
            });
    }, [letter]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && recipes.length === 0 ? (
            <NoRecipes />
        ) : (
            <div className='letter-recipes'>
                <div className='recipes-declaration search'>Recipes starting with the letter {letter.toUpperCase()}</div>
                <div className='recipes-list'>
                    {recipes.slice(0, recipeNum).map((meal, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/id/${meal.idMeal}`}>
                            <div className={`recipe-${index}`}>
                                <div className='recipe-name'>{meal.strMeal}</div>
                                <img className='recipe-image' src={meal.strMealThumb} alt='T_T'/>
                            </div>
                            </Link>
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

export default RecipesByLetterList;