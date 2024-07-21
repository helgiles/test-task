import Modal from 'react-modal';
import css from './CamperModal.module.css';
import formatPrice from '../../helpers/formatPrice';

Modal.setAppElement('#root');

export default function CamperModal({ isOpen, onRequestClose, data }) {
	const {
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
		details = {},
		gallery = [],
		reviews = [],
	} = data;

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Camper Details'
			className={css.modal}
			overlayClassName={css.overlay}
		>
			<button className={css.closeBtn} onClick={onRequestClose}></button>

			<div className={css.content}>
				<div className={css.header}>
					<h2>{name}</h2>
					<div className={css.indexes}>
						<div className={css.about}>
							<p>
								{rating} ({reviews.length} Reviews)
							</p>
							<p>{location}</p>
						</div>
						<p>{formatPrice(price)}</p>
					</div>
				</div>

				<div className={css.info}>
					<ul className={css.gallery}>
						{gallery.map((image, index) => (
							<li key={index} className={css.image}>
								<img src={image} alt={name} />
							</li>
						))}
					</ul>

					<div className={css.detailedDescription}>
						<p>{description}</p>

						<div>
							<p>{location}</p>
							<p>Adults: {adults}</p>
							<p>Children: {children}</p>
							<p>Engine: {engine}</p>
							<p>Transmission: {transmission}</p>
							<p>Form: {form}</p>
							<p>Length: {length}</p>
							<p>Width: {width}</p>
							<p>Height: {height}</p>
							<p>Tank: {tank}</p>
							<p>Consumption: {consumption}</p>

							<div>
								<h3>Details:</h3>
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
								<p>Gas: {details.gas}</p>
								<p>Water: {details.water}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
