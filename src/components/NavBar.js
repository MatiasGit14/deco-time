import logo from "../assets/sillonLogo.svg";
import CartWidget from "../components/CartWidget";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					<img
						src={logo}
						alt='logo deco'
						width='30'
						height='24'
						className='d-inline-block align-text-top'
					/>
					DecoTime
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#'>
								Textiles
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Flores
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Exterior
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link'>Accesorios</a>
						</li>
					</ul>
					<CartWidget />
					<form className='d-flex' id='searchInput'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button className='btn btn-outline-success' type='submit'>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
