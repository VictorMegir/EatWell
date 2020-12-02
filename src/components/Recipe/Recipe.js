import React, {Component} from 'react';
import Ingredient from '../Ingredient/Ingredient';

class Recipe extends Component
{
  constructor() {
    super();
    this.state = {
      meals: [
        {
          "idMeal":null,
          "strMeal":null,
          "strDrinkAlternate":null,
          "strCategory":null,
          "strArea":null,
          "strInstructions":null,
          "strMealThumb":null,
          "strTags":null,
          "strYoutube":null,
          "strIngredient1":null,
          "strIngredient2":null,
          "strIngredient3":null,
          "strIngredient4":null,
          "strIngredient5":null,
          "strIngredient6":null,
          "strIngredient7":null,
          "strIngredient8":null,
          "strIngredient9":null,
          "strIngredient10":null,
          "strIngredient11":null,
          "strIngredient12":null,
          "strIngredient13":null,
          "strIngredient14":null,
          "strIngredient15":null,
          "strIngredient16":null,
          "strIngredient17":null,
          "strIngredient18":null,
          "strIngredient19":null,
          "strIngredient20":null,
          "strMeasure1":null,
          "strMeasure2":null,
          "strMeasure3":null,
          "strMeasure4":null,
          "strMeasure5":null,
          "strMeasure6":null,
          "strMeasure7":null,
          "strMeasure8":null,
          "strMeasure9":null,
          "strMeasure10":null,
          "strMeasure11":null,
          "strMeasure12":null,
          "strMeasure13":null,
          "strMeasure14":null,
          "strMeasure15":null,
          "strMeasure16":null,
          "strMeasure17":null,
          "strMeasure18":null,
          "strMeasure19":null,
          "strMeasure20":null,
          "strSource":null,
          "dateModified":null
        }
      ]
    }
  }
  
  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Spicy')
    .then(response => response.json())
    .then(result => this.setState({ meals: result.meals }))
  }

  render() {
    const meal = this.state.meals[0];
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
    )
  }
}

export default Recipe;