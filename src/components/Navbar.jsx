import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<img className="logo" src="https://i.pinimg.com/originals/2d/02/4d/2d024d238ae6c84b9ac2c961febd5a7a.jpg" alt="" />
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge text-bg-secondary">0</span>
						</button>
						<ul className="dropdown-menu">

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};