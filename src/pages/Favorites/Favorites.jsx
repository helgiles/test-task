import React from 'react';
import { useSelector } from 'react-redux';
import Camper from '../../components/Camper/Camper';
import { selectFavorites } from '../../redux/selectors';
import css from './Favorites.module.css';

export default function Favorites() {
	const favorites = useSelector(selectFavorites);

	return (
		<div className={css.favorites}>
			<h1>Favorites</h1>
			{favorites.length === 0 ? (
				<p>No favorite campers yet.</p>
			) : (
				<ul className={css.list}>
					{favorites.map(camper => (
						<li className={css.item} key={camper._id}>
							<Camper data={camper} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
