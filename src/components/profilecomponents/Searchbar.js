import React, { Component } from 'react'
import "../../css/profile/searchBar.css"

export class Searchbar extends Component {
    render() {
        return (
            <div className="searchFrame">
            <input className="searchInput" type="text" placeholder="Twitter'da Ara"/>
        </div>
        )
    }
}



export default Searchbar