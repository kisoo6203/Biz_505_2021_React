import React from 'react'
import CounterButton from './CounterButton'

function CounterView({ count }) {
	return (
		<div>
			카운트 : {count}
			<CounterButton/>
		</div>
	)
}

export default CounterView
