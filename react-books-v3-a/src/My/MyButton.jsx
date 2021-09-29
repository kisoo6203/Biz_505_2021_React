import React from 'react'

/**
 * 객체지향의 탄생
 * 기존에 잘~! 만들어진 클래스를 가져다가
 * 마치 부품을 조립하는 방식으로 프로그래밍을 하자
 * 잘~ 만들어진 클래스가 있는데
 * 기능을 좀 추가하고 싶다 그러면 상속을 받고 일부를 변경하여
 * 내것으로 만들어서 재사용했다
 * 
 * 객체지향의 가장 큰  단점 : 상속받은 부모 클래스를 잘 알아야한다
 * 상속받은 부모클래스가 변경되면 내 클래스도 변경하거나 버려야 한다
 * 
 * 부모와 자식 클래스간의 결합도가 매우 높아진다
 * 응집도는 매우 낮아진다
 * 
 * 좋은 모듈은 서로 결합도가 낮고, 응집도는 높아야된다
 * 
 * 이러한 상속으로 단점을 보완하는 디자인 패턴 개념이 나오는데
 * 확장이다
 */
function MyButton({ onClick, children }) {
	const myStyle = {
		backgroundColor: "blue",
		color: "white",
		outline: "none",
		border: "none",
		borderRadius: "10px",
		padding: "0.8em",
	}
	return (
		<button style={myStyle} onClick={onClick}>
			{children}
			
		</button>
	)
}

export default MyButton
