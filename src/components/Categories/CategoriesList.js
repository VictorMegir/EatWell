import './style/CategoriesList.css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function Categories()
{
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    setTimeout(() => setLoading(false), 5000);

    useEffect(() => {
        fetch('/api/categories')
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setCategories(data.categories);
                setLoading(false);
            })
    }, [])
    
    return (
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && categories.length === 0 ? (
            <Page404 />
        ) : (
            <div className='categories' id='category'>
                <div className='categories-declaration'>Search by Category</div>
                <div className='categories-list'>
                    {categories.map((category, index) => (
                        <div className={`category`} key={index}>
                            <Link to={
                                {
                                    pathname: `/categories/${category.strCategory}`,
                                    state: {category}
                                }}>
                                <img className='category-thumbnail' src={category.strCategoryThumb} alt='T_T'/>
                                <div className='category-name'>{category.strCategory}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </>
    );    
}

export default Categories;