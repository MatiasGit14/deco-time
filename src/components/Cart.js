import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
	serverTimestamp,
	setDoc,
	doc,
	collection,
	updateDoc,
	increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { Modal, Button } from "react-bootstrap";

const Cart = () => {
	const cartData = useContext(CartContext);
	const [orderId, setOrderId] = useState(null);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const createOrder = () => {
		let order = {
			buyer: {
				email: "zidane@zinadine.com",
				name: "Zinedine Zidane",
				phone: "123456789",
			},
			date: serverTimestamp(),
			items: cartData.cartList.map((it) => {
				return { id: it.id, price: it.price, title: it.title, qty: it.qty };
			}),
			total: cartData.totalCost,
		};

		const createOrderInFirestore = async () => {
			const newOrderRef = doc(collection(db, "orders"));
			await setDoc(newOrderRef, order);
			return newOrderRef;
		};
		createOrderInFirestore()
			.then((res) => {
				setOrderId(res.id);
			})
			.then(handleShow())
			.then(
				cartData.cartList.map(async (item) => {
					const itemRef = doc(db, "products", item.id);
					await updateDoc(itemRef, {
						stock: increment(-item.qty),
					});
				})
			)
			.then(cartData.removeList()) //Cambiar ERROR POR MODAL
			.catch((err) => console.log(err));
	};

	return cartData.cartList.length > 0 ? (
		<div className='container'>
			<div className='container'>
				<div className='row cartTitles'>
					<div className='col-9'>
						<h2>Tu Carrito</h2>
					</div>
					<div className='col-3'>
						<p>
							Total de Artículos: <span>{cartData.cartList.length}</span>
						</p>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='row cartRow cartHeader'>
					<div className='col-4'>Productos</div>
					<div className='col-3'>Cantidad</div>
					<div className='col-3'>Precio Unitario</div>
					<div className='col'>Total</div>
				</div>
			</div>

			{cartData.cartList.map((item) => (
				<div className='container'>
					<div className='row cartRow '>
						<div className='col-2'>
							<img className='cartImg' src={item.smallPic} />
						</div>
						<div className='col-2'>
							<p>{item.title}</p>
							<button
								className='btn btn-danger'
								onClick={() => cartData.deleteProduct(item.id)}>
								Eliminar
							</button>
						</div>

						<div className='col-3'>{item.qty}</div>
						<div className='col-3'>${item.price}</div>
						<div className='col'>${item.qty * item.price}</div>
					</div>
				</div>
			))}
			<div className='container total'></div>
			<div className='container'>
				<div className='row cartRow'>
					<div className='col-7'></div>
					<div className='col-3'>
						<p style={{ fontWeight: "bold" }}>Total: </p>
					</div>
					<div className='col'>
						<p style={{ fontWeight: "bold" }}> ${cartData.totalCost}</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row cartRow'>
					<div className='col-6'>
						<Link to='/'>
							<p className='continueShopping'>
								Seguí eligiendo tu mejor deco...
							</p>
						</Link>
					</div>
					<div className='col-6 btnComprarContainer '>
						<button
							onClick={createOrder}
							className='btn btn-success btnComprar'>
							Comprar
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Compra Finalizada</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Su orden de compra ha sido creada con el id: {orderId}
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={handleClose}>
						Aceptar
					</Button>
				</Modal.Footer>
			</Modal>

			<div className='container carroVacio'>
				<h2>Aún no has agregado nada al carrito!</h2>
				<Link to='/'>
					<p className='continueShopping'>Seguí eligiendo tu mejor deco...</p>
				</Link>
			</div>
		</>
	);
};

export default Cart;
