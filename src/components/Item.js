import { Link } from "react-router-dom";

const Item = (props) => {
	return (
		<div className='card'>
			<img className='card-img-top' src={props.picture} alt='Card cap' />
			<div className='card-body'>
				<h5 className='card-title'>{props.title}</h5>
				<p className='card-text'>{props.description}</p>
				<p>Stock disponible: {props.stock}</p>
				<p>
					<Link to='/item/2'>
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
					<div className='card card-body'>{props.details}</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
