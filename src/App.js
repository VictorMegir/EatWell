import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Constacts from './components/Pages/Contacts';
import RecipeDetails from './components/Recipes/RecipeDetails';
import CategoryDetails from './components/Categories/CategoryDetails';
import RecipesByLetterList from './components/RecipesByLetter/RecipesByLetterList';
import IngredientDetails from './components/Ingredients/IngredientDetails';
import AreaRecipes from './components/Areas/AreaRecipes';
import RecipesByLetter from './components/RecipesByLetter/RecipesByLetter';

function App()
{
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contacts' exact component={Constacts}/>
          <Route path='/recipes/:name' exact component={RecipeDetails}/>
          <Route path='/categories/:name' exact component={CategoryDetails} />
          <Route path='/categories/letter/:letter' exact component={RecipesByLetterList} />
          <Route path='/ingredients/:ingredient' exact component={IngredientDetails} />
          <Route path='/area/:area' exact component={AreaRecipes} />
        </Switch>
        <RecipesByLetter />
      </div>
    </Router>
  );
}

export default App;