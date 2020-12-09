import React from 'react';

function About() 
{
    return(
        <div className='about-page'>
            <div className='about-declaration'>ABOUT</div>
            <div className='creator-info'>My name is Victor Megir. I like food and recipes and i believe we should all eat well. Contact me <a href='/contacts'>here.</a></div>
            <div className='api-info'>
                <div className='text'>This application was made possible thanks to <a href='https://www.themealdb.com/'>TheMealDB.com.</a></div>
                <img src='./TheMealDB-image.png' alt='T_T' />
                <div className='text'>This is a free web api that allows anyone to make web requests. It provides JSOn data for 254 recipes and 572 ingredients including images. These recipes and ingredients as well as the related images are the same as the ones my application provides. TheMealDB.com also provides the option to search recipes by their origin country, the ingredients they contain, and by their category they belong in. In addition it provides with a request call that selects a random recipe as well the option to search a recipe by their initial letter. </div>
                </div>
            <div className='tool-info'>React</div>
        </div>
    )
}

export default About;