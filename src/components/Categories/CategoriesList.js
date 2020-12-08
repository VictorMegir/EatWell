import './CategoriesList.css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Categories()
{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(result => setCategories(result.categories))
    }, [])
    
    return (
        <div className='categories' id='category'>
            <div className='categories-declaration'>Categories</div>
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
    );    
}

export default Categories;