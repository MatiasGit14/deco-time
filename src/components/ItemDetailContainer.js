import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import productsList from "../utils/products";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});

	const getItem = () => {
		customFetch(2000, productsList[2])
			.then((prod) => setProduct(prod))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getItem();
	}, []);

	const onAdd = (quantity) => {
		alert("Se agregaron al carrito " + quantity + " unidades");
	};
	return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
