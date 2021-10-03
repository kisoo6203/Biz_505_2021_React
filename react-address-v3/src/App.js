import logo from './logo.svg';
import './App.css';
import AddressInput from './comps/AddressInput';
import AddressList from './comps/AddressList';
import {useState} from 'react';
import UUID from "react-uuid"
import HeaderInput from './comps/HeaderInput';

function App() {

	// 주소 한개의 데이터를 저장할 state 선언하기
	const [address, setAddress] = useState({
		a_id : UUID(),
		a_name : "김기수",
		a_tel : "010-8214-6662",
		a_addr : "광주",
		a_age : 30,
	})
	const [addrBook, setAddrBook] = useState([
		
	])
//	const [addrBook, setAddrBook] = useState([address]);

	const stateGroup = {
		address,
		setAddress,
		addrBook,
		setAddrBook,
	}

  return (
    <div className="App">
      <header className="App-header">
        <HeaderInput />
      </header>
	  <AddressInput stateGroup={stateGroup}/>
	  <AddressList addrBook={addrBook}/>
    </div>
  );
}

export default App;
