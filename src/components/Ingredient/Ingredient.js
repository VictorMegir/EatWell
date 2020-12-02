import React, {Component} from 'react';

class Ingredient extends Component {
    render() {
        var visibility_style = {};
        if(this.props.ingredient===null || this.props.ingredient===""){
            visibility_style = {display:'none'};
        }
        return (
            <li className='ingredient-measure-pair' style={visibility_style}>
                <div>{this.props.measure} {this.props.ingredient}</div>
            </li>
        );
    }
}

export default Ingredient;