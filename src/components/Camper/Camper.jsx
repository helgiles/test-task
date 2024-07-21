import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperModal from '../CamperModal/CamperModal';
import css from './Camper.module.css';
import formatPrice from '../../helpers/formatPrice';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';

export default function Camper({
	data: {
		_id,
		name,
		price,
		rating,
		location,
		adults,
		children,
		engine,
		transmission,
		form,
		length,
		width,
		height,
		tank,
		consumption,
		description,
		details,
		gallery,
		reviews,
	},
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => setModalIsOpen(true);
	const closeModal = () => setModalIsOpen(false);

	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);

	const isFavorite = favorites.some(fav => fav._id === _id);

	const handleFavoriteClick = () => {
		if (isFavorite) {
			dispatch(removeFavorite({ _id }));
		} else {
			dispatch(
				addFavorite({
					_id,
					name,
					price,
					rating,
					location,
					adults,
					children,
					engine,
					transmission,
					form,
					length,
					width,
					height,
					tank,
					consumption,
					description,
					details,
					gallery,
					reviews,
				})
			);
		}
	};

	return (
		<div className={css.card}>
			<div className={css.image}>
				<img src={gallery[0]} alt={name} width='290px' />
			</div>
			<div className={css.info}>
				<div className={css.header}>
					<h2>{name}</h2>
					<div className={css.priceFavorite}>
						<p>{formatPrice(price)}</p>
						<button
							className={`${css.favorite} ${isFavorite ? css.active : ''}`}
							onClick={handleFavoriteClick}
						></button>
					</div>
				</div>
				<div className={css.meta}>
					<p>
						{rating} ({reviews.length} Reviews)
					</p>
					<p>{location}</p>
				</div>
				<div className={css.description}>
					<p>{description}</p>
				</div>
				<div className={css.details}>
					<div className={css.item}>{adults} adults</div>
					<div className={css.item}>{transmission}</div>
					<div className={css.item}>{engine}</div>
					{details.kitchen !== 0 && <div className={css.item}>Kitchen</div>}
					<div className={css.item}>{details.beds} beds</div>
					{details.airConditioner !== 0 && <div className={css.item}>AC</div>}
				</div>
				<button onClick={openModal}>Show more</button>
			</div>
			<CamperModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				data={{
					name,
					price,
					rating,
					location,
					adults,
					children,
					engine,
					transmission,
					form,
					length,
					width,
					height,
					tank,
					consumption,
					description,
					details,
					gallery,
					reviews,
				}}
			/>
		</div>
	);
}
