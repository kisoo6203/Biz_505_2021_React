import React from 'react'
import { Route } from 'react-router'
import LoginForm from './LoginForm'

function LoginMain() {
	return (
		<ul>
			<li>Home</li>
			<li>공지사항</li>
			<li>자유게시판</li>
			<li>
				로그인
				<Route path="/login" exact>
					<LoginForm/>
				</Route>
			</li>
			<li>회원가입</li>
		</ul>
	)
}

export default LoginMain
