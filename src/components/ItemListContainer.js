import ItemCount from "./ItemCount";
const ItemListContainer = ({ greeting }) => {
	return (
		<>
			<p>ItemListContainer</p>
			<p className='greeting'>{greeting}</p>
			<ItemCount stock='5' initial='1' />
		</>
	);
};

export default ItemListContainer;
