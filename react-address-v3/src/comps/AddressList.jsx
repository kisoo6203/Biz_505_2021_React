import React from 'react'

// 비구조화
// const {addrBook} = props 대신 직접 분해하면서 받기
function AddressList({ addrBook }) {

	const viewList = addrBook.map((addr,index)=>{
		return <tr className="text_1" key={addr.a_id}>
			<td>{index + 1}</td>
			<td>{addr.a_name}</td>
			<td>{addr.a_addr}</td>
			<td>{addr.a_tel}</td>
			<td>{addr.a_age}</td>
		</tr>
		
	})

	return <table>
		<thead className="head_bar">
			<tr>
				<th>ID</th>
				<th>이름</th>
				<th>주소</th>
				<th>전화번호</th>
				<th>나이</th>
			</tr>
		</thead>
		<tbody>{viewList}</tbody>
	</table>
}

export default AddressList
