import React, {useEffect, useState} from 'react';
import Ingredient from '../Ingredient/Ingredient';

function Recipe({match})
{
  const [meal, setMeal] = useState([]);
    
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${match.params.name}`)
        .then(response => response.json())
        .then(result => setMeal(result.meals[0]));
    });

  return(
    <div className='Recipe'>
        <h2 className='name'>{meal.strMeal}</h2>
        <img className='image' src={meal.strMealThumb} alt='T_T'></img>
        <div className='tags'>Tags: {meal.strTags}</div>
        <div className='category'>Category: {meal.strCategory}</div>
        <div className='youtube-link' ><a href={meal.strYoutube}>Youtube</a></div>
        <h3 className='ingredients-declaration'>Ingredients</h3>
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
        <h3 className='instructions-declation'>Instructions</h3>
        <div className='instructions'>{meal.strInstructions}</div>
      </div>
  );
}

export default Recipe;