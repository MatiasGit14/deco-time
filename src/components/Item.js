import { Link } from "react-router-dom";

const Item = ({ product }) => {
	return (
		<div className='card'>
			<img className='card-img-top' src={product.pictureUrl} alt='Card cap' />
			<div className='card-body'>
				<h5 className='card-title'>{product.title}</h5>
				<p className='card-text'>{product.description}</p>
				<p>Stock disponible: {product.stock}</p>
				<p>
					<Link to={`/item/${product.id}`}>
						<button
							className='btn btn-primary'
							type='button'
							data-toggle='collapse'
							data-target='#collapseExample'
							aria-expanded='false'
							aria-controls='collapseExample'>
							Ver Detalles
						</button>
					</Link>
				</p>
				<div className='collapse' id='collapseExample'>
					<div className='card card-body'>{product.details}</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
