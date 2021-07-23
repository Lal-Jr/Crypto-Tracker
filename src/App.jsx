import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Logo from "./CryptoLogo.png";
import Crypto from "./Crypto";

const App = () => {
	const [datas, setDatas] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false"
			)
			.then((res) => setDatas(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filterCrypto = datas.filter((data) =>
		data.name.toLowerCase().includes(search.toLowerCase())
	);

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
							onChange={handleChange}
						/>
					</form>
				</div>
				{filterCrypto.map((data) => {
					return (
						<Crypto
							key={data.id}
							name={data.name}
							price={data.current_price}
							symbol={data.symbol}
							marketcap={data.total_volume}
							volume={data.market_cap}
							image={data.image}
							priceChange={data.price_change_percentage_24h}
						/>
					);
				})}
			</div>
		</>
	);
};

export default App;
