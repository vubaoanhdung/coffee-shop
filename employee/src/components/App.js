import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import Landing from "../routes/Landing";
import Orders from "../routes/Orders";
import Menu from "../routes/Menu";
import ItemEdit from "../routes/ItemEdit";
import ItemForm from "../routes/Item/ItemForm";
import history from "../history";
import { createItem } from "../actions/index";

function App({ createItem }) {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Switch>
					<Route exact path="/" component={Landing}></Route>
					<Route exact path="/orders" component={Orders}></Route>
					<Route exact path="/menu" component={Menu}></Route>
					<Route path="/menu/create">
						<ItemForm onSubmit={(data) => createItem(data)} />
					</Route>
					<Route path="/menu/:id" component={ItemEdit}></Route>
				</Switch>
			</Router>
		</div>
	);
}
export default connect(null, { createItem })(App);
