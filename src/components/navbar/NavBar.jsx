import './NavBar.css';
import {NavLink} from "react-router-dom";
import React from "react";


function NavBar() {

    return (
        <>

            <nav>
                <ul>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/">
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/blognewblog">
                        Nieuwe blog
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/blogoverview">
                        Alle blogs
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/notfound">
                        404 to check
                    </NavLink>

                </ul>
            </nav>

        </>

    )
}

export default NavBar;

