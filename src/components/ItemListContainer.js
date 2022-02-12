import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
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

	const onAdd = (quantity) => {
		alert("Se agregaron al carrito " + quantity + " unidades");
	};
	return (
		<>
			<p>ItemListContainer</p>
			<p className='greeting'>{props.greeting}</p>
			<ItemList products={products} />
			<ItemCount stock={5} initial={1} onAdd={onAdd} />
		</>
	);
};

export default ItemListContainer;
