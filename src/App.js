import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/item/:itemId' element={<ItemDetailContainer />} />
					<Route path='/category/:categoryId' element={<ItemListContainer />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
