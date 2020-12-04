import React from 'react';
import CategoryRecipe from './CategoryRecipe';

function Category({match, location})
{
    const category = location.state.category;
    return(
        <div className='category-page'>
            <img className='category-thumbnail' src={category.strCategoryThumb} alt='T_T'/>
            <p className='category-description'>{category.strCategoryDescription}</p>
            <CategoryRecipe category={category.strCategory} />
        </div>
    );
}

export default Category;