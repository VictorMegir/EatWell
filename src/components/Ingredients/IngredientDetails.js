import './style/IngredientDetails.css';
import React, { useEffect, useState } from 'react';
import IngredientRecipes from './IngredientRecipes';
import Page404 from '../Pages/Page404';
import LoadingPage from '../Pages/LoadingPage';

function IngredientDetails({location})
{
    const ingredientName = location.pathname.split('/')[2];
    const [ingredient, setIngredient] = useState([]);
    
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    useEffect(() => {
        fetch(`/api/ingredients/`)
            .then(resposne => resposne.json())
            .then(data => {
                if(data.meals === null) return;
                for(var i = 0; i < data.meals.length; i++)
                {
                    if(data.meals[i].strIngredient === ingredientName) {
                        setIngredient(data.meals[i]);
                    }
                }
                setLoading(false);
            });
    }, [ingredientName]);
    
    return (
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && ingredient === null ? (
            <Page404 />
        ) : (
            <div className='ingredient-page'>
                <div className='ingredient-name'>{ingredient.strIngredient}</div>
                <img className='ingredient-image' src={`https://www.themealdb.com/images/ingredients/${ingredientName}.png`} alt='T_T' />
                <p className='ingredient-description'>{ingredient.strDescription}</p>
                <IngredientRecipes ingredient={ingredient.strIngredient}/>
            </div>
        )}
        </>
    );
}

export default IngredientDetails;