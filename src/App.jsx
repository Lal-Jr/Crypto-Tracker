import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Logo from "./CryptoLogo.png";
import Crypto from "./Crypto";

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
			)
			.then((res) => setData(res.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div className="container">
				<div className="Search">
					<img className="Image" src={Logo} alt="Logo" />
					<form>
						<input
							type="text"
							placeholder="Search"
							className="Input"
						/>
					</form>
				</div>
				<Crypto />
			</div>
		</>
	);
};

export default App;
