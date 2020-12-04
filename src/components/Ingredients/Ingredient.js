import React from 'react';

function Ingredient(props)
{
    var visibility_style = {};
    if(props.ingredient===null || props.ingredient===""){
        visibility_style = {display:'none'};
    }
    
    return (
        <li className='ingredient-measure-pair' style={visibility_style}>
            <div>{props.measure} {props.ingredient}</div>
        </li>
    );
}

export default Ingredient;