import React from 'react';

function Writer() {
	return (
		<div className="input_box">
			<div><input placeholder="작성자"></input></div>
			<div><input placeholder="제목"></input></div>
			<div><input placeholder="내용"></input></div>
			<button className="btn_save">저장</button>
		</div>
		
	)
}

export default Writer
