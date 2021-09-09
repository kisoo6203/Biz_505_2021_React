import React from 'react'
import {NavLink} from "react-router-dom";

function MainNav() {

	return (
		<ul className="main_menu">
			<li><NavLink to="/">HOME</NavLink></li>
			<li><NavLink to="/Writer">글쓰기</NavLink></li>
			<li><NavLink to="/Login">로그인</NavLink></li>
			<li><NavLink to="/Join">회원가입</NavLink></li>
		</ul>
	)
}

export default MainNav
