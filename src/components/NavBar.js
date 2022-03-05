import logo from "../assets/sillonLogo.svg";
import CartWidget from "../components/CartWidget";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [navState, setNavState] = useState(false);
	const toggleMenu = () => {
		!navState ? setNavState(true) : setNavState(false);
	};
	let show = navState ? "show" : "";
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Link to='/' style={{ textDecoration: "none" }}>
					<p className='navbar-brand'>
						<img
							src={logo}
							alt='logo deco'
							width='30'
							height='24'
							className='d-inline-block align-text-top'
						/>
						DecoTime
					</p>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					onClick={toggleMenu}
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className={"collapse navbar-collapse " + show}
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link to='/category/1' style={{ textDecoration: "none" }}>
								<p className='nav-link' aria-current='page' href='#'>
									Textiles
								</p>
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/category/2' style={{ textDecoration: "none" }}>
								<p className='nav-link' href='#'>
									Flores
								</p>
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/category/3' style={{ textDecoration: "none" }}>
								<p className='nav-link' href='#'>
									Exterior
								</p>
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/category/4' style={{ textDecoration: "none" }}>
								<p className='nav-link' href='#'>
									Accesorios
								</p>
							</Link>
						</li>
					</ul>
					<Link
						to='/cart'
						style={{ textDecoration: "none", marginRight: "25px" }}>
						<CartWidget />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
