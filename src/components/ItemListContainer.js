import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import productsList from "../utils/products";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	const getProducts = () => {
		customFetch(2000, productsList)
			.then((prod) => setProducts(prod))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		categoryId === undefined
			? getProducts()
			: customFetch(
					2000,
					productsList.filter(
						(prod) => prod.categoryId === parseInt(categoryId)
					)
			  )
					.then((prod) => setProducts(prod))
					.catch((err) => console.log(err));
	}, [categoryId]);

	return (
		<>
			<ItemList items={products} />
		</>
	);
};

export default ItemListContainer;
