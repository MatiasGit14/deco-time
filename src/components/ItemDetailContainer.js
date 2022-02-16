import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import productsList from "../utils/products";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { itemId } = useParams();
	console.log(itemId);

	const getItem = () => {
		customFetch(2000, productsList[itemId])
			.then((prod) => setProduct(prod))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getItem();
	}, [itemId]);

	return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
