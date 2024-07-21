import css from './Features.module.css';

export default function Features({ details }) {
	return (
		<div className={css.features}>
			<div className={css.basicDetails}>
				<p>Adults: {details.adults}</p>
				<p>Children: {details.children}</p>
				<p>Engine: {details.engine}</p>
				<p>Transmission: {details.transmission}</p>
				<p>Air Conditioner: {details.airConditioner}</p>
				<p>Bathroom: {details.bathroom}</p>
				<p>Kitchen: {details.kitchen}</p>
				<p>Beds: {details.beds}</p>
				<p>TV: {details.TV}</p>
				<p>CD: {details.CD}</p>
				<p>Radio: {details.radio}</p>
				<p>Shower: {details.shower}</p>
				<p>Toilet: {details.toilet}</p>
				<p>Freezer: {details.freezer}</p>
				<p>Hob: {details.hob}</p>
				<p>Microwave: {details.microwave}</p>
			</div>

			<div className={css.vehicleDetails}>
				<table>
					<tbody>
						<tr>
							<td className={css.fieldName}>Form</td>
							<td className={css.fieldValue}>{details.form}</td>
						</tr>
						<tr>
							<td className={css.fieldName}>Length</td>
							<td className={css.fieldValue}>{details.length}</td>
						</tr>
						<tr>
							<td className={css.fieldName}>Width</td>
							<td className={css.fieldValue}>{details.width}</td>
						</tr>
						<tr>
							<td className={css.fieldName}>Height</td>
							<td className={css.fieldValue}>{details.height}</td>
						</tr>
						<tr>
							<td className={css.fieldName}>Tank</td>
							<td className={css.fieldValue}>{details.tank}</td>
						</tr>
						<tr>
							<td className={css.fieldName}>Consumption</td>
							<td className={css.fieldValue}>{details.consumption}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
