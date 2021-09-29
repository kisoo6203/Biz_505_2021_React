import React,{useState} from 'react'
import CounterView from './CounterView';

const CounterButton=() => {
	const [setCount] = useState(0);

	const plus = () => {
		setCount(count + 1)
	}
	const minus = () => {
		setCount(count - 1)
	}
	return (
		<div>
			<button onClick={plus}>증가</button>
			<button onClick={minus}>감소</button>
		</div>
	)
}

export default CounterButton
