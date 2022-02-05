import { useState, useEffect } from "react";
import images from "../assets/img/Images";
import Item from "./Item";

const productsList = [
	{
		id: 1,
		title: "Almohadones",
		description: "Almohadones de arpillera",
		price: 1500,
		pictureUrl: images.almohadon,
		stock: 10,
		details:
			"Almohadones de arpillera con inscripciones, se pueden utilizar tanto en el interior como en el exterior",
	},
	{
		id: 2,
		title: "Espejo Gold",
		description: "Espejo estilo maquillaje",
		price: 2700,
		pictureUrl: images.espejo,
		stock: 8,
		details: "Espejo chico para maquillaje o decorativo bañado en oro",
	},
	{
		id: 3,
		title: "Farol con vela",
		description: "Farol de hierro y vidrio",
		price: 190,
		pictureUrl: images.farol,
		stock: 13,
		details:
			"Farol tanto para interiores o exteriores de hierro forjado y tapas de vidrio. Incluye vela para interior del farol",
	},
];
const customFetch = (time, data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data != null ? resolve(data) : reject("Hubo un problema...");
		}, time);
	});
};
const ItemList = () => {
	const [products, setProducts] = useState([]);

	const getProducts = () => {
		customFetch(2000, productsList)
			.then((prod) => setProducts(prod))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getProducts();
	}, [products]);
	return (
		<div className='cardContainer'>
			{productsList.map((prod) => (
				<Item
					key={prod.id}
					title={prod.title}
					description={prod.description}
					price={prod.price}
					picture={prod.pictureUrl}
					stock={prod.stock}
					details={prod.details}
				/>
			))}
		</div>
	);
};

export default ItemList;
