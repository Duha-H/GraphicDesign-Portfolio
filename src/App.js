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
			data: jsonData.data,
			layout: 'scroll'
		};

		this.handleInfoHover = this.handleInfoHover.bind(this);
		this.handleScrollLayout = this.handleScrollLayout.bind(this);
		this.handleGridLayout = this.handleGridLayout.bind(this);
	}

	handleInfoHover() {

	}

	handleScrollLayout() {
		this.setState({layout: 'scroll'});
	}

	handleGridLayout() {
		this.setState({layout: 'grid'});
	}


	render() {
		return (
			<div class="app">
				<header class="main-header">
					<h1 id="header-title">DUHA HASSAN</h1>
					<h3 id="header-subtitle">BUSINESS CARD & LOGO DESIGNS</h3>
				</header>
				<div class="content">
					<div id="sidebar">
						<div id="layout-button">
							<img src={require(`./assets/icons/info_icon_w.svg`)} alt="unavailable"/>
							<span id="info-tooltip">
								This is a collection of some business card and logo designs I've made.<br />
								Click on a logo to expand or collapse a section.<br />
								Hover over a business card to display the other side of the card.
							</span>
						</div>
						<button id="layout-button" onClick={this.handleScrollLayout}>
							<img src={require(`./assets/icons/scroll_icon_w.svg`)} alt="unavailable"/>
						</button>
						<button id="layout-button" onClick={this.handleGridLayout}>
							<img src={require(`./assets/icons/grid_icon_w.svg`)} alt="unavailable"/>
						</button>
					</div>
					<MainComponent data={this.state.data} layout={this.state.layout}/>
					<div id="sidebar"></div>
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

