import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RandomRecipe from '../RandomRecipe/RandomRecipe';

class Home extends Component {
    render() {
        return(
            <div className='homepage'>
                <h2>HOME</h2>
                <div className='random-recipes-container'>
                    <RandomRecipe />
                    <RandomRecipe />
                    <RandomRecipe />
                    <RandomRecipe />
                    <RandomRecipe />
                </div>
                <Link to={`/recipes/Soup`}><div className='recipe-link'>Recipe</div></Link>
            </div>
        )
    }
}

export default Home;