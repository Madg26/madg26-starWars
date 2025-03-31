import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import React from "react";

export const Navbar = () => {
	const remove = (removeLike) => {
		const action = {
			type: "removeFavorite",
			payload: removeLike
		}
		dispatch(action)
	}
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();
	const [likes, setLikes] = useState();
	useEffect(() => {
		setLikes(store.favorites.length);
	}, [store.favorites])
	return (
		<nav className="navbar">
			<div className="container">
				<img className="logo btn"
					onClick={() => {
						navigate("/")
					}}
					src="https://i.pinimg.com/originals/2d/02/4d/2d024d238ae6c84b9ac2c961febd5a7a.jpg" alt="" />
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge text-bg-secondary">{likes}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((value, index) => {
								return (
								<li key={index}>
									<div className="menu ms-2">
										<span>{value}</span>
										<button className="btn ms-2"
										onClick={()=> remove(value)}><i className="fa-solid fa-trash"></i></button>
									</div>
								</li>
							)})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};