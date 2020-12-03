import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Recipe from './components/Recipe/Recipe';
import Category from './components/Category/Category';
import CategoriesList from './components/Category/CategoriesList';
import FindRecipes from './components/FindRecipes/FindRecipes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App()
{
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/find' exact component={FindRecipes}/>
          <Route path='/recipes/:name' exact component={Recipe}/>
          <Route path='/categories/' exact component={CategoriesList} />
          <Route path='/categories/:name' exact component={Category} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;