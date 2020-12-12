import './style/RecipeDetails.css';
import React, {useEffect, useState} from 'react';
import Ingredient from './VisibleIngredient';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function Recipe({match, location})
{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  })

  const [meal, setMeal] = useState([]);
  const recipeName = match.params.name;

  useEffect(() => {
    fetch(`/${recipeName}`)
      .then(response => response.json())
      .then(data => {
        if(data.meals === null) return;
        setLoading(false);
        setMeal(data.meals[0]);
      })
  }, [recipeName]);

  return(
    <>
    {meal.length === 0  && !loading ? (
      <Page404 />
    ) : loading === true ? (
      <LoadingPage />
    ) : (
      <div className='Recipe'>
        <div className='name'>{meal.strMeal}</div>
        <div className='block-content'>
          <div className='image-block'>
            <img className='image' src={meal.strMealThumb} alt='T_T'></img>
            <div className='info'>
              <div className='tags'>Tags: {meal.strTags}</div>
              <div className='category'>Category: {meal.strCategory}</div>
              <div className='youtube-link' ><a href={meal.strYoutube}>Video</a></div>
            </div>
          </div>
          <div className='ingredient-block'>
            <div className='ingredients-declaration'>Ingredients</div>
            <ul className='ingredients'>
              <Ingredient ingredient={meal.strIngredient1} measure={meal.strMeasure1} />
              <Ingredient ingredient={meal.strIngredient2} measure={meal.strMeasure2} />
              <Ingredient ingredient={meal.strIngredient3} measure={meal.strMeasure3} />
              <Ingredient ingredient={meal.strIngredient4} measure={meal.strMeasure4} />
              <Ingredient ingredient={meal.strIngredient5} measure={meal.strMeasure5} />
              <Ingredient ingredient={meal.strIngredient6} measure={meal.strMeasure6} />
              <Ingredient ingredient={meal.strIngredient7} measure={meal.strMeasure7} />
              <Ingredient ingredient={meal.strIngredient8} measure={meal.strMeasure8} />
              <Ingredient ingredient={meal.strIngredient9} measure={meal.strMeasure9} />
              <Ingredient ingredient={meal.strIngredient10} measure={meal.strMeasure10} />
              <Ingredient ingredient={meal.strIngredient11} measure={meal.strMeasure11} />
              <Ingredient ingredient={meal.strIngredient12} measure={meal.strMeasure12} />
              <Ingredient ingredient={meal.strIngredient13} measure={meal.strMeasure13} />
              <Ingredient ingredient={meal.strIngredient14} measure={meal.strMeasure14} />
              <Ingredient ingredient={meal.strIngredient15} measure={meal.strMeasure15} />
              <Ingredient ingredient={meal.strIngredient16} measure={meal.strMeasure16} />
              <Ingredient ingredient={meal.strIngredient17} measure={meal.strMeasure17} />
              <Ingredient ingredient={meal.strIngredient18} measure={meal.strMeasure18} />
              <Ingredient ingredient={meal.strIngredient19} measure={meal.strMeasure19} />
              <Ingredient ingredient={meal.strIngredient20} measure={meal.strMeasure20} />
            </ul>
          </div>
        </div>
        <div className='instructions-block'>
          <div className='instructions-declation'>Instructions</div>
          <div className='instructions'>{meal.strInstructions}</div>
        </div>
      </div>
    )}
    </>
  );
}

export default Recipe;