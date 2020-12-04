import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Constacts from './components/Pages/Contacts';
import RecipeDetails from './components/Recipe/RecipeDetails';
import CategoryDetails from './components/Category/CategoryDetails';
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
          <Route path='/contacts' exact component={Constacts}/>
          <Route path='/recipes/:name' exact component={RecipeDetails}/>
          <Route path='/categories/:name' exact component={CategoryDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;