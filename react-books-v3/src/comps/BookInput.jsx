import React from 'react'
import {Route} from 'react-router-dom'
import "../css/BookInput.css";

function BookInput() {
	return (
		<Route path="/insert">
			<div className="insert_menu">
				<div className="div_box">도서명<input className="input_box"/></div>
				<div className="div_box">장르<input className="input_box"/></div>
				<button className="btn_add">리스트 추가</button>
			</div>
		</Route>
	)
}

export default BookInput
