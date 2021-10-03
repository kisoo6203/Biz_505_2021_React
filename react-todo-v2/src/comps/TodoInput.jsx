import React from 'react'
import "../css/TodoInput.css"

function TodoInput() {
	return (
		<div className="insert_menu">
			<div className="div_todo">오늘 할 일</div>
				<div className="div_input">
					<input className="input_box"/>
					<button className="btn_add">추가</button>
				</div>
		</div>
	)
}

export default TodoInput
