import "../css/TodoInput.css";
import {useTodoContext} from "../context/AppContextProvider";

function TodoInput() {
	const {todo, onChange, onClick} = useTodoContext();
	return (
		<div className="form">
			<div>오늘 할 일</div>
			<input onChange={onChange} value={todo.t_text}/>
			<div className="btn_insert" onClick={onClick}>
				추가
			</div>
			<p>{todo.t_text}</p>
		</div>
	);
}

export default TodoInput;