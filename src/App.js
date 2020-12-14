import './App.css';
import './universal-styles/RecipePreview.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Constacts from './components/Pages/Contacts';
import SearchRecipes from './components/Recipes/SearchRecipes';
import RecipeDetails from './components/Recipes/RecipeDetails';
import CategoryDetails from './components/Categories/CategoryDetails';
import IngredientDetails from './components/Ingredients/IngredientDetails';
import ByLetterRecipes from './components/ByLetter/ByLetterRecipes';
import RecipesByLetter from './components/ByLetter/ByLetterList';
import AreaRecipes from './components/Areas/AreaRecipes';
import Page404 from './components/Pages/Page404';

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
          <Route path='/recipes/id/:id' exact component={RecipeDetails}/>
          <Route path='/recipes/name/:name' exact component={RecipeDetails}/>
          <Route path='/recipes/search/:input' exact component={SearchRecipes} />
          <Route path='/categories/:name' exact component={CategoryDetails} />
          <Route path='/categories/letter/:letter' exact component={ByLetterRecipes} />
          <Route path='/ingredients/:ingredient' exact component={IngredientDetails} />
          <Route path='/area/:area' exact component={AreaRecipes} />
          <Route component={Page404} />
        </Switch>
        <RecipesByLetter />
      </div>
    </Router>
  );
}

export default App;