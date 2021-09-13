import React from 'react'
import "../css/Main.css"

function BucketMain() {
	return (
		<section>
			<table className="main_page">
				<tbody>
					<tr>
						<td>FLAG</td>
						<td>날짜</td>
						<td>BUCKET</td>
						<td>완료</td>
						<td>취소</td>
					</tr>
					<tr>
						<td>중요</td>
						<td>2021-08-01 00:00:00</td>
						<td>리액트 실습</td>
						<td>2021-09-13 09:35:11</td>
						<td><input type="checkbox"></input></td>
					</tr>
					<tr>
						<td>매우중요</td>
						<td>2021-01-12 00:00:00</td>
						<td>제주도 태풍</td>
						<td>2021-09-13 09:35:12</td>
						<td><input type="checkbox"></input></td>
					</tr>
					<tr>
						<td>긴급</td>
						<td>2021-09-13 09:34:44</td>
						<td>버킷추가</td>
						<td>2021-09-13 09:35:15</td>
						<td><input type="checkbox"></input></td>
					</tr>
					<tr>
						<td>긴급</td>
						<td>2021-09-13 09:34:49</td>
						<td>나는 무엇</td>
						<td>2021-09-13 09:35:16</td>
						<td><input type="checkbox"></input></td>
					</tr>
					<tr>
						<td>긴급</td>
						<td>2021-09-13 09:34:55</td>
						<td>이번주에는 무어슬</td>
						<td>?</td>
						<td><input type="checkbox"></input></td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default BucketMain
