import React from 'react';
// About.jsx는 src/comps 폴더에 있기에 
// src/css 폴더에 있는 about.css를 import하기위한 경로 지정
import "../css/about.css";

function About() {
	return (
		<div className="about">
			<h1>자기소개서</h1>
			<div>
				<label htmlFor="">이름</label>
				<span>김기수</span>
			</div>
			<div>
				<label htmlFor="">생년월일</label>
				<span>1992.02.26</span>
			</div>
			<div>
				<label htmlFor="">전화번호</label>
				<span>010-8214-6662</span>
			</div>
			<div>
				<label htmlFor="">주요특기</label>
				<span>낚시</span>
			</div>
			<div>
				<label htmlFor="">구현기술</label>
				<span>
					<ul>
						<li>Spring MVC</li>
						<li>Oracle DBMS</li>
						<li>MySQL DBMS</li>
						<li>HTML5</li>
						<li>CSS2 and CSS3</li>
						<li>Nodejs Web Server</li>
						<li>MongoDB NoSQL</li>
						<li>React App</li>
						<li>Android App</li>
					</ul>
				</span>
			</div>
		</div>
	)
}

export default About
