import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import "../css/MainNav.css"
import LoginForm from './LoginForm'

function MainNav() {
	return (
		<nav className="main_nav">
		<NavLink to="/" exact>Home</NavLink>
		<NavLink to="notice">공지사항</NavLink>
		<NavLink to="board">자유게시판</NavLink>
		<NavLink to="login">
			로그인</NavLink>
		<NavLink to="join">회원가입</NavLink>
		</nav>
	)
}

export default MainNav
