import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import db from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import customFetch from "../utils/customFetch";
import productsList from "../utils/products";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { itemId } = useParams();

	// const getItem = () => {
	// 	customFetch(100, productsList[idParseado - 1])
	// 		.then((prod) => setProduct(prod))
	// 		.catch((err) => console.log(err));
	// };
	const fetchDetail = async (id) => {
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return { id: id, ...docSnap.data() };
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	};
	useEffect(() => {
		fetchDetail(itemId)
			.then((res) => setProduct(res))
			.catch((err) => console.log(err));
	}, [itemId]);

	return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
