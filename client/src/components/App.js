import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

// browser history
import history from "../history";

import Header from "./Header";
import Landing from "./Landing";
import Menu from "./Menu";
import Cart from "./Cart";

// component History
import History from "./History";

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Router history={history}>
					<Header />
					<Route exact path="/" component={Landing}></Route>
					<Route path="/order" component={Menu}></Route>
					<Route path="/history" component={History}></Route>
					<Route path="/cart" component={Cart}></Route>
				</Router>
			</div>
		);
	}
}

export default connect(null)(App);
