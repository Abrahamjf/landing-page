import React from "react";
import {Navbar} from "./Navbar.js";
import {Jumbotron} from "./Jumbotron.js";
import {Card} from "./Card.js";

//create your first component
export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</React.Fragment>
	);
};

