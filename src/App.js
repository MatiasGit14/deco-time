import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/item/:itemId' element={<ItemDetailContainer />} />
					<Route
						path='/category/:categoryIdParam'
						element={<ItemListContainer />}
					/>
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
