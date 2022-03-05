import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const { categoryIdParam } = useParams();

	const getAllDocs = async () => {
		const querySnapshot = await getDocs(collection(db, "products"));
		return querySnapshot.docs.map((document) => ({
			id: document.id,
			...document.data(),
		}));
	};

	const getCategoryFilter = async (catParam) => {
		const q = query(
			collection(db, "products"),
			where("categoryId", "==", parseInt(catParam))
		);
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map((document) => ({
			id: document.id,
			...document.data(),
		}));
	};
	useEffect(() => {
		categoryIdParam === undefined
			? getAllDocs()
					.then((res) => setProducts(res))
					.catch((err) => console.log(err))
			: getCategoryFilter(categoryIdParam)
					.then((res) => setProducts(res))
					.catch((err) => console.log(err));
	}, [categoryIdParam]);

	return <ItemList items={products} />;
};

export default ItemListContainer;
