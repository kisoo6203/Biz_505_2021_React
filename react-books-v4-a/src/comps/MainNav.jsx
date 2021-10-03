import React from 'react'
import { NavLink } from "react-router-dom"
import "../css/MainNav.css";

/**
 * navigation 모양을 디자인한 컴포넌트
 */
function MainNav() {
	return (
		<nav className="main_nav">
			<NavLink to="/" exact>Home</NavLink>
			<NavLink to="/insert" exact>Insert</NavLink>
			<NavLink to="/List" exact>List View</NavLink>
		</nav>
	)
}

export default MainNav
