import './App.css';
import Header from './comps/Header';
import { BucketMain } from './comps';
import Neck from './comps/Neck';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
	  <Neck/>
	  <BucketMain/>
      <Footer/>
    </div>
  );
}

export default App;
