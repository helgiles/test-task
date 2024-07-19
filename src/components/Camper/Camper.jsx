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
		kitchen,
		beds,
		airConditioner,
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
		<div>
			<div>
				<img src={gallery[0]} alt={name} width='290px' />
			</div>
			<div>
				<div>
					<div>
						<h2>{name}</h2> <p>{price}</p>
					</div>
					<div>
						<p>
							{rating} ({reviews.length} Reviews)
						</p>
						<p>{location}</p>
					</div>
				</div>
				<div>
					<p>{description}</p>
				</div>
				<div>
					<div>{adults} adults</div>
					<div>{transmission}</div>
					<div>{engine}</div>
					<div>kitchen{/*{details.kitchen}*/}</div>
					<div>{details.beds} beds</div>
					<div>AC{/*{details.airConditioner}*/}</div>
				</div>
				<button>Show more</button>
			</div>
		</div>
	);
}
