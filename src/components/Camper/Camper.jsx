import React from 'react';
import css from './Camper.module.css';

export default function Camper({
	data: {
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
	return (
		<div className={css.card}>
			<div className={css.image}>
				<img src={gallery[0]} alt={name} width='290px' />
			</div>
			<div className={css.info}>
				<div className={css.header}>
					<h2>{name}</h2> <p>{price}</p>
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
					<div>{adults} adults</div>
					<div>{transmission}</div>
					<div>{engine}</div>
					{details.kitchen !== 0 && <div>Kitchen</div>}
					<div>{details.beds} beds</div>
					{details.airConditioner !== 0 && <div>AC</div>}
				</div>
				<button>Show more</button>
			</div>
		</div>
	);
}
