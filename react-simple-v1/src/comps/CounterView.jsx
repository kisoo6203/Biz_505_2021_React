import React, {useState} from 'react'

const CounterView = () => {
	const [count] = useState(0);
	return (
		<div>
			<div>카운트 : {count}</div>
		</div>
	)
}

export default CounterView
