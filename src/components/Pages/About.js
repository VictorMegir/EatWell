import './style/About.css';
import React from 'react';
import mealdbImage from './images/TheMealDB-image.png';
import reactImage from './images/React-image.png';
function About() 
{
    return(
        <div className='about-page'>
            <div className='about-declaration'>ABOUT</div>
            <div className='content'>My name is Victor Megir. I like food and recipes and i believe we should all eat well. Contact me <a href='/contacts'>here.</a></div>
            <div className='content'>This application was made possible thanks to <a href='https://www.themealdb.com/'>TheMealDB.com.</a> This is a free web api that allows anyone to make web requests. It provides JSON data for 254 recipes and 572 ingredients including images. These recipes and ingredients as well as the related images are the same as the ones my application provides. TheMealDB.com also provides the option to search recipes by their origin country, the ingredients they contain, and by their category they belong in. In addition it provides with a request call that selects a random recipe as well the option to search a recipe by their initial letter.</div>
            <div className='content'>This application was build using <a href='https://reactjs.org/'>React.</a> React is a popular JavaScript framework that allows developers to easily build frontend applications and interfaces. This application utilizes the <a href='https://reactjs.org/docs/hooks-overview.html'>Hooks</a> programming interface, which simplifies the code. This application also utilizes the <a href='https://reactrouter.com/'>React Router</a> programming interface which allows for simplified navigation on the web.</div>
            <div className='content'>This application uses <a href='https://firebase.google.com/'>Firbase</a> for hosting. Firebase is hosting platform developed by Google that makes deploying a web application very easy. </div>
            <div className='link-images'>
                <a href='https://www.themealdb.com/'><img src={mealdbImage} className='mealdb-image' alt='T_T' /></a>
                <a href='https://reactjs.org/'><img src={reactImage} className='react-image' alt='T_T' /></a>
            </div>
        </div>
    )
}

export default About;