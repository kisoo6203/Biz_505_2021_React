import React from 'react'
import "../css/BookList.css"

function BookList() {
	return (
		<ul className="menu_bar">
			<li className="li_next">ID</li>
			<li className="li_next">도서명</li>
			<li className="li_next">장르</li>
		</ul>
	)
}

export default BookList
