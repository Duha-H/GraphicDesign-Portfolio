import React, { Component } from 'react';
import './App.css';
import { HashRouter} from 'react-router-dom';
import jsonData from './assets/content.json';
import MainComponent from './components/MainComponent';

class App extends Component 
{

	constructor() {
		super();
		this.state = {
			data: jsonData.data
		};
	}


	componentDidMount() {
		
		const retrievedData = jsonData.data;
		
		console.log(this.state.data);
		for(var i = 0; i < this.state.data.length; i++) {
			var obj = this.state.data[i];
			//console.log("thing " + obj.title);
		}
	}


	render() {
		return (
			<div className="App">
				<header id="main-header">
					<h1 id="header-title">Duha Hassan</h1>
					<h3 id="header-subtitle">BUSINESS CARD & LOGO DESIGNS</h3>
				</header>
				<div className="content">
					<MainComponent data={this.state.data}/>
				</div>
			</div>
		);
	}
}


export default () => (
    <HashRouter>
        <App />
    </HashRouter>
);

