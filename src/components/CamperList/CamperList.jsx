import { useState } from 'react';
import { useSelector } from 'react-redux';
import Camper from '../Camper/Camper';
import css from './CamperList.module.css';
import { selectCampers } from '../../redux/selectors';

export default function CamperList() {
	const campers = useSelector(selectCampers);
	const [visibleCampers, setVisibleCampers] = useState(4);

	const loadMore = () => {
		setVisibleCampers(prev => prev + 4);
	};

	return (
		<div className={css.campers}>
			<ul className={css.list}>
				{campers.slice(0, visibleCampers).map(camper => (
					<li className={css.item} key={camper.id}>
						<Camper data={camper} />
					</li>
				))}
			</ul>
			{visibleCampers < campers.length && (
				<button onClick={loadMore}>Load more</button>
			)}
		</div>
	);
}
