import React from 'react';
import CategoryRecipes from './CategoryRecipes';

function Category({match, location})
{
    const category = location.state.category;
    return(
        <div className='category-page'>
            <h3 className='category-name'>{category.strCategory}</h3>
            <img className='category-thumbnail' src={category.strCategoryThumb} alt='T_T'/>
            <p className='category-description'>{category.strCategoryDescription}</p>
            <CategoryRecipes category={category.strCategory} />
        </div>
    );
}

export default Category;