import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function RecipePreview(props)
{
    const [thumbnail, setThumbnail] = useState([]);
    const name = props.name;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
        .then(result => setThumbnail(result.meals[0].strMealThumb))
    }, [name]);

    return(
        <div className='recipe'>
            <Link to={`/recipes/${props.name}`}>
            <div className='recipe-name'>{props.name}</div>
            <img className='recipe-image' src={thumbnail} alt='T_T'></img>
            </Link>
        </div>
    );
}

export default RecipePreview;