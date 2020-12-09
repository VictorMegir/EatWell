import './AreaList.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function AreasList()
{      
    const [areas, setAreas] = useState([]);
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(response => response.json())
        .then(result => {
            delete result.meals[23];    //"Unknown"
            setAreas(result.meals)
        });
    }, []);

    return(
        <div className='areas' id='country'>
            <div className='areas-declaration'>Search Recipes from different Areas of the world.</div>
            <div className='areas-list'>
                {areas.map((area, index) => (
                    <div className='area' key={index}>
                        <Link to={`/area/${area.strArea}`}>
                        <div className='area-name'>{area.strArea}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AreasList;