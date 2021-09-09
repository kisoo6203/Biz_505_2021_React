import { BrowserRouter, Route } from 'react-router-dom';
import BBsMain from './comps/BBsMain';
import './App.css';
import { Header } from './comps';
import { MainNav } from './comps';
import Join from './comps/Join';
import Login from './comps/Login';
import Writer from './comps/Writer';

function App() {
  return (
	  <BrowserRouter>
    <div className="App">
      <Header/>
	  <MainNav/>
	  	<Route path="/" component={BBsMain} exact/>
	  	<Route path="/Writer" component={Writer} exact/>
		<Route path="/Login" component={Login} exact/>
		<Route path="/Join" component={Join} exact/>
		
	  
    </div>
	</BrowserRouter>
  );
}

export default App;
