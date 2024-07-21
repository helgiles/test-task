import css from './Features.module.css';

export default function Features({ details }) {
	return (
		<div className={css.features}>
			<div className={css.basicDetails}>
				<div className={css.item}>Adults: {details.adults}</div>
				<div className={css.item}>Children: {details.children}</div>
				<div className={css.item}>Engine: {details.engine}</div>
				<div className={css.item}>Transmission: {details.transmission}</div>
				<div className={css.item}>
					Air Conditioner: {details.airConditioner}
				</div>
				<div className={css.item}>Bathroom: {details.bathroom}</div>
				<div className={css.item}>Kitchen: {details.kitchen}</div>
				<div className={css.item}>Beds: {details.beds}</div>
				<div className={css.item}>TV: {details.TV}</div>
				<div className={css.item}>CD: {details.CD}</div>
				<div className={css.item}>Radio: {details.radio}</div>
				<div className={css.item}>Shower: {details.shower}</div>
				<div className={css.item}>Toilet: {details.toilet}</div>
				<div className={css.item}>Freezer: {details.freezer}</div>
				<div className={css.item}>Hob: {details.hob}</div>
				<div className={css.item}>Microwave: {details.microwave}</div>
			</div>

			<div className={css.vehicleDetails}>
				<h3>Vehicle details</h3>
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
