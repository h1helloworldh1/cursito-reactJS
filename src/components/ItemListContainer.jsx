import React, {Component} from 'react';
import ItemCount from './ItemCount';

export default class ItemListContainer extends Component{
    render() {
        return(
            <li style={{listStyle: "none"}}>
                <hr/>
                <a href="#top" style={{textDecoration: "none", color: "black"}}>{this.props.value}</a>
                <ItemCount stock={5} initial={1} onAdd={0}/>
            </li>
        )
    }
}
