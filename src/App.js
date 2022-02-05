import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "../src/components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting='Bienvenido Juan' />
		</>
	);
}

export default App;
