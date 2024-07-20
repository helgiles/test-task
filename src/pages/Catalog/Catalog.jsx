import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import CamperList from '../../components/CamperList/CamperList';
import { fetchCampers } from '../../redux/operations';
import { selectLoading } from '../../redux/selectors';
import { selectError } from '../../redux/selectors';
import SearchBar from '../../components/SearchBar/SearchBar';
import css from './Catalog.module.css';

export default function Catalog() {
	const dispatch = useDispatch();

	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return (
		<div className={css.catalog}>
			{error && <ErrorMessage />}
			{loading && <Loader />}
			<SearchBar />
			<CamperList />
		</div>
	);
}
