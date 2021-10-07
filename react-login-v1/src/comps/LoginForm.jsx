import React from 'react'
import "../css/LoginForm.css"

function LoginForm() {
	return (
		<div className="div_box">
			<div>
				<div>
					<input className="input_box" placeholder="아이디를 입력해주세요"/>
				</div>
				<div>
					<input className="input_box" placeholder="비밀번호를 입력해주세요"/>
				</div>
				<button className="btn_login">로그인</button>
			</div>
		</div>
		
	)
}

export default LoginForm
