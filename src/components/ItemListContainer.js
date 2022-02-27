import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import productsList from "../utils/products";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	const getProducts = () => {
		customFetch(100, productsList)
			.then((prod) => setProducts(prod))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		// 		const firestoreFetch= async()=>{}
		// const querySnapshot = await getDocs(collection(db, "products"));
		// querySnapshot.forEach((doc) => {
		//   console.log(`${doc.id} => ${doc.data()}`)};
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

	return <ItemList items={products} />;
};

export default ItemListContainer;
