import './style/CategoryDetails.css';
import React, { useEffect, useState } from 'react';
import CategoryRecipes from './CategoryRecipes';
import Page404 from '../Pages/Page404';
import LoadingPage from '../Pages/LoadingPage';

function Category({location})
{
    const categoryName = location.pathname.split('/')[2];
    const [category, setCategory] = useState([]);

    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    useEffect(() => {
        //fetch('/api/categories/')
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => response.json())
            .then(data => {
                if(data.categories === null) return;
                for(var i=0; i< data.categories.length; i++)
                {
                    if(data.categories[i].strCategory === categoryName) {
                        setCategory(data.categories[i]);
                    }
                }
                setLoading(false);
            })
    }, [categoryName]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && category === null ? (
            <Page404 />
        ) : (
            <div className='category-page'>
                <div className='category-name'>{category.strCategory}</div>
                <img className='category-thumbnail' src={category.strCategoryThumb} alt='T_T'/>
                <p className='category-description'>{category.strCategoryDescription}</p>
                <CategoryRecipes category={category.strCategory} />
            </div>
        )}
        </>
    );
}

export default Category;