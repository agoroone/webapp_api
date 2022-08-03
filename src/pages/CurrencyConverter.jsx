
import React, { useEffect, useState } from "react";

function CurrencyConverter() {

	const [currency, setCurrency] = useState([]);

const fetchCurrency = async () => {
		try {
			const response = await fetch(
				""
			);
			const data = await response.json();
            setCurrency(data);
            	console.log(data);
		} catch (err) {
			console.log(err);
			alert('Unable to fetch response')
		}

	
	};


	useEffect(() => {
		fetchCurrency();

	}, []);


  return (
   <section className="Posts">
			<h2>Currency Converter</h2>

			<div className="card_post">
				{currency.map((item, index) => (
					<h4>{item.GPB}</h4>
				))}
			</div>
		</section>
  )
}

export default CurrencyConverter
