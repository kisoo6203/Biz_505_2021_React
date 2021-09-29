import React from 'react'
import {NavLink} from "react-router-dom";
import "../css/MainNav.css";

function MainNav() {
	return (
		<ul className="main_menu">
			<li><NavLink exact to="/" activeClassName="active_nav">HOME</NavLink></li>
			<li><NavLink exact to="/Writer" activeClassName="active_nav">글쓰기</NavLink></li>
			<li><NavLink exact to="/Login" activeClassName="active_nav">로그인</NavLink></li>
			<li><NavLink exact to="/Join" activeClassName="active_nav">회원가입</NavLink></li>
		</ul>
	)
}

export default MainNav
