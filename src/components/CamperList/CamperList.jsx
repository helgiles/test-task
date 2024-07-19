import Camper from '../Camper/Camper';
import { useSelector } from 'react-redux';
import css from './CamperList.module.css';
import { selectCampers } from '../../redux/selectors';

export default function CamperList() {
	const Campers = useSelector(selectCampers);

	return (
		<>
			<ul>
				{Campers.map(camper => (
					<li className={css.item} key={camper.id}>
						<Camper data={camper} />
					</li>
				))}
			</ul>
			<button>Load more</button>
		</>
	);
}
