import React from 'react'
import { Route } from 'react-router'
import TodoInput from './TodoInput'

function TodoMain() {
	return (
		<>
			<Route path="/">
				<TodoInput/>
			</Route>
		</>
	)
}

export default TodoMain
