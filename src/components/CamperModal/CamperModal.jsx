import { useState } from 'react';
import Modal from 'react-modal';
import css from './CamperModal.module.css';
import formatPrice from '../../helpers/formatPrice';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import OrderForm from '../OrderForm/OrderForm';

Modal.setAppElement('#root');

export default function CamperModal({ isOpen, onRequestClose, data }) {
	const [activeTab, setActiveTab] = useState('features');

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

	const handleTabClick = tab => {
		setActiveTab(tab);
	};

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

						<div className={css.detailsForm}>
							<ul className={css.detailsKey}>
								<li
									className={activeTab === 'features' ? css.active : ''}
									onClick={() => handleTabClick('features')}
								>
									Features
								</li>
								<li
									className={activeTab === 'reviews' ? css.active : ''}
									onClick={() => handleTabClick('reviews')}
								>
									Reviews
								</li>
							</ul>

							<div className={css.detailsOrder}>
								<div className={css.details}>
									{activeTab === 'features' ? (
										<Features
											details={{
												...details,
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
											}}
										/>
									) : (
										<Reviews reviews={reviews} />
									)}
								</div>

								<OrderForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
