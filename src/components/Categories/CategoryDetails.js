import './style/CategoryDetails.css';
import React from 'react';
import CategoryRecipes from './CategoryRecipes';
import Page404 from '../Pages/Page404';

function Category({location})
{
    const category = location.state.category;

    return(
        <>
        {location.state === undefined ? (
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