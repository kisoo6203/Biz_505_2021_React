import { BrowserRouter as Router, Route } from 'react-router-dom';
import BBsMain from './comps/BBsMain';
import './App.css';
import { Header } from './comps';
import { MainNav } from './comps';
import Join from './comps/Join';
import Login from './comps/Login';
import Writer from './comps/Writer';

function App() {
  return (
	<Router>
    <div className="App">
      <Header/>
	  <MainNav/>
	  	<Route exact path="/" component={BBsMain} />
	  	<Route exact path="/Writer" component={Writer} />
		<Route exact path="/Login" component={Login} />
		<Route exact path="/Join" component={Join} />
	  
    </div>
	</Router>
  );
}

export default App;
