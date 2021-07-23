import React from "react";
import "./Crypto.scss";

const Crypto = ({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	marketcap,
}) => {
	return (
		<>
			<div className="Crypto-container">
				<div className="Crypto-row">
					<div className="Crypto">
						<img src={image} alt="crypto" />
						<h1>{name}</h1>
						<p className="Crypto-symbol">{symbol}</p>
					</div>
					<div className="Crypto-data">
						<p className="Crypto-price">₹{price}</p>
						<p className="Crypto-volume">
							₹{volume.toLocaleString()}
						</p>
						{priceChange < 0 ? (
							<p className="Crypto-percent red">
								{priceChange.toFixed(2)}%
							</p>
						) : (
							<p className="Crypto-percent green">
								{priceChange.toFixed(2)}%
							</p>
						)}

						<p className="Crypto-marketcap">
							Mkt Cap: ${marketcap.toLocaleString()}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Crypto;
