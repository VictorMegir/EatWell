import './style/AreaList.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function AreasList()
{      
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);
    
    useEffect(() => {
        //fetch('/api/areas/')
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                delete data.meals[23];    //"Unknown"
                setAreas(data.meals);
                setLoading(false);
            });
    }, []);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && areas.length === 0 ? (
            <Page404 />
        ) : (
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
        )}
        </>
    );
}

export default AreasList;