import React from 'react';
import "./css/Nav.css";

let menuDatas = [
    {
        uri: "about",
        name: "About"
    },
    {
        uri: "works",
        name: "Projects"
    }, 
    // {
    //     // uri: "lang",
    //     name: "🇺🇸",
    //     customClass: "langs"
    // }
];


class Nav extends React.Component {
    render () {

        let menuItems = menuDatas.map(
            (menuData) =>
            <li className="menu-item">
                <a href={menuData.uri}>
                    {menuData.name}
                </a>
            </li>
        )
    
        return (
            <nav className="nav">
                <ul>
                    {menuItems}
                    <li className="menu-item langs">🇺🇸
                        <ul className="dropdown">
                            <li>
                                <a href="#">ENG</a>
                            </li>
                            <li>
                                <a href="#">KOR</a>
                            </li>
                        </ul>
                    </li>
                </ul>


            </nav>

        )
    }

}

export default Nav;