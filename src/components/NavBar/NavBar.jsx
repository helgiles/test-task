import { Link } from 'react-router-dom';
import css from './NavBar.module.css';

export default function Navbar() {
	return (
		<nav>
			<ul className={css.nav}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/catalog'>Catalog</Link>
				</li>
				<li>
					<Link to='/favorites'>Favorites</Link>
				</li>
			</ul>
		</nav>
	);
}
