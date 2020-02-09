import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import './Global.css';
import './App.css';

function App() {

	return (
		<div id="app">
			<Sidebar />
			<Main />
		</div>
	);
}

export default App;
