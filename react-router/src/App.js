import logo from './logo.svg';
import './App.css';
import './css/menu.css';
import MainNav from './comps/MainNav';
import Home from './comps/Home';
import About from './comps/About';
import BBsWriter from './comps/BBsWriter';

// BrowserRouter
// react에서 navigation을 구현할때 navigation에 포함될
// 컴포넌트들을 감싸는 Super Navi Component

// Link
// Navigation Menu를 구현할대 사용하는 컴포넌트
// 실제 rendering이 되면 a tag로 변환되는 컴포넌트
// React에서는 a tag를사용하여 page를 전환하는 코드를 사용하지 않는다
//
// Route
// navigation의 menu를 선택했을때
// 선택적으로 컴포넌트를 나타나게 하는 도구
// 이 컴포넌트를 사용하여 Home, About, BBsWriter 컴포넌트와
// Link 컴포넌트를 연결하기
import { BrowserRouter, Route } from "react-router-dom"

function App() {
	
  return (
	<BrowserRouter>
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h3>나의 React 프로젝트</h3>
		</header>
		<MainNav/>
			<Route path="/" component={Home} exact/>
			<Route path="/about" component={About}/>
			<Route path="/bbs" component={BBsWriter}/>
			<Route path="/bbs/write" component={BBsWriter}/>
			
		</div>
	</BrowserRouter>
  );
}

export default App;
