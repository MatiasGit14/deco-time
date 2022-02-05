import ItemList from "./ItemList";

const ItemListContainer = (props) => {
	return (
		<>
			<p>ItemListContainer</p>
			<p className='greeting'>{props.greeting}</p>
			<ItemList />
		</>
	);
};

export default ItemListContainer;
