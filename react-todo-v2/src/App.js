import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TodoMain from './comps/TodoMain';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<TodoMain/>
		</BrowserRouter>
    </div>
  );
}

export default App;
