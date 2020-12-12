import './style/CategoryDetails.css';
import React from 'react';
import CategoryRecipes from './CategoryRecipes';
import Page404 from '../Pages/Page404';

function Category({match, location})
{
    if(location.state===undefined) {
        return(<Page404 />);
    }

    const category = location.state.category;

    return(
        <div className='category-page'>
            <div className='category-name'>{category.strCategory}</div>
            <img className='category-thumbnail' src={category.strCategoryThumb} alt='T_T'/>
            <p className='category-description'>{category.strCategoryDescription}</p>
            <CategoryRecipes category={category.strCategory} />
        </div>
    );
}

export default Category;