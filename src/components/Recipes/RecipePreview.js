import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function RecipePreview(props)
{
    const [thumbnail, setThumbnail] = useState([]);
    const recipeName = props.name;

    useEffect(() => {
        fetch(`/api/recipes/${recipeName}`)
            .then(response => response.json())
            .then(data => setThumbnail(data.meals[0].strMealThumb))
    }, [recipeName]);

    return(
        <div className='recipe'>
            <Link to={`/recipes/${props.name}`}>
            <div className='recipe-name'>{props.name}</div>
            <img className='recipe-image' src={thumbnail} alt='T_T'/>
            </Link>
        </div>
    );
}

export default RecipePreview;