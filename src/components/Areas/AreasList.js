import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function AreasList()
{
    const [areas, setAreas] = useState([]);
    console.log(areas);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(response => response.json())
        .then(result => setAreas(result.meals));
    }, []);

    return(
        <div className='areas'>
            {areas.map((area, index) => (
                <Link to={`/area/${area.strArea}`} key={index}>
                <div className='area-name'>{area.strArea}</div>
                </Link>
            ))}
        </div>
    );
}

export default AreasList;