import React, {Component} from 'react';

export default class ItemListContainer extends Component{
    render() {
        return(
            <li style={{listStyle: "none"}}>
                <a href="#top" style={{textDecoration: "none", color: "black"}}>{this.props.value}</a>
            </li>
        )
    }
}
