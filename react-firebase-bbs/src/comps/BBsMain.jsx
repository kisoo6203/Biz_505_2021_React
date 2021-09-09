import React, {useEffect} from 'react';
import { useState } from 'react';
import { firestore } from "../config/BBSConfig"
import "../css/BBs.css"

function BBsMain() {
	const [bbsBody, setBBsBody] = useState([]);
	const firebaseFetch = async () =>{
		firestore
		.collection("bbs")
		.get()
		.then((bbsList)=>{
			bbsList.forEach((bbs)=>{
				const item = bbs.data();
				setBBsBody([
					...bbsBody,
					<tr>
						<td>{item.b_date}</td>
						<td>{item.b_time}</td>
						<td>{item.b_writer}</td>
						<td>{item.b_subject}</td>
					</tr>
				]);
			});
		});
	};

	useEffect(firebaseFetch,[]);

	return (
		<table className="bbs_list">
			<thead>
				<tr>
				<th>작성일자</th>
				<th>작성시각</th>
				<th>작성자</th>
				<th>제목</th>
				</tr>
			</thead>
    
			<tbody>{bbsBody}</tbody>
		</table>
	)
}

export default BBsMain
