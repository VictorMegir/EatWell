import './style/RecipeDetails.css';
import React, {useEffect, useState} from 'react';
import Ingredient from './VisibleIngredient';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function Recipe({match})
{
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 5000);

  useEffect(() => {
    fetch(`/api/recipes/id/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        if(data.meals === null) return;
        setLoading(false);
        setRecipe(data.meals[0]);
      })
    }, [match]);

  return (
    <>
    {loading === true ? (
      <LoadingPage />
    ) : loading === false && recipe.length === 0 ? (
      <Page404 />
    ) : (
      <div className='Recipe'>
        <div className='name'>{recipe.strMeal}</div>
        <div className='block-content'>
          <div className='image-block'>
            <img className='image' src={recipe.strMealThumb} alt='T_T'></img>
            <div className='info'>
              <div className='tags'>Tags: {recipe.strTags}</div>
              <div className='category'>Category: {recipe.strCategory}</div>
              <div className='youtube-link' ><a href={recipe.strYoutube}>Video</a></div>
            </div>
          </div>
          <div className='ingredient-block'>
            <div className='ingredients-declaration'>Ingredients</div>
            <ul className='ingredients'>
              <Ingredient ingredient={recipe.strIngredient1} measure={recipe.strMeasure1} />
              <Ingredient ingredient={recipe.strIngredient2} measure={recipe.strMeasure2} />
              <Ingredient ingredient={recipe.strIngredient3} measure={recipe.strMeasure3} />
              <Ingredient ingredient={recipe.strIngredient4} measure={recipe.strMeasure4} />
              <Ingredient ingredient={recipe.strIngredient5} measure={recipe.strMeasure5} />
              <Ingredient ingredient={recipe.strIngredient6} measure={recipe.strMeasure6} />
              <Ingredient ingredient={recipe.strIngredient7} measure={recipe.strMeasure7} />
              <Ingredient ingredient={recipe.strIngredient8} measure={recipe.strMeasure8} />
              <Ingredient ingredient={recipe.strIngredient9} measure={recipe.strMeasure9} />
              <Ingredient ingredient={recipe.strIngredient10} measure={recipe.strMeasure10} />
              <Ingredient ingredient={recipe.strIngredient11} measure={recipe.strMeasure11} />
              <Ingredient ingredient={recipe.strIngredient12} measure={recipe.strMeasure12} />
              <Ingredient ingredient={recipe.strIngredient13} measure={recipe.strMeasure13} />
              <Ingredient ingredient={recipe.strIngredient14} measure={recipe.strMeasure14} />
              <Ingredient ingredient={recipe.strIngredient15} measure={recipe.strMeasure15} />
              <Ingredient ingredient={recipe.strIngredient16} measure={recipe.strMeasure16} />
              <Ingredient ingredient={recipe.strIngredient17} measure={recipe.strMeasure17} />
              <Ingredient ingredient={recipe.strIngredient18} measure={recipe.strMeasure18} />
              <Ingredient ingredient={recipe.strIngredient19} measure={recipe.strMeasure19} />
              <Ingredient ingredient={recipe.strIngredient20} measure={recipe.strMeasure20} />
            </ul>
          </div>
        </div>
        <div className='instructions-block'>
          <div className='instructions-declation'>Instructions</div>
          <div className='instructions'>{recipe.strInstructions}</div>
        </div>
      </div>
    )}
    </>
  );
}

export default Recipe;