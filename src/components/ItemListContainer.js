import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import productsList from "../utils/products";

const ItemListContainer = (props) => {
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
		<>
			<p>ItemListContainer</p>
			<p className='greeting'>{props.greeting}</p>
			<ItemList items={products} />
		</>
	);
};

export default ItemListContainer;
