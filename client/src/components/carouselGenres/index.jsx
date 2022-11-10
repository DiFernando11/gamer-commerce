import React from 'react';
import CarouselButtons from '../carouselButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGenres } from '../../redux/actions';

function CarouselGenres() {
	const dispatch = useDispatch();
	const genre = useSelector((state) => state.Genre);

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	return (
		<section id="Genres">
			<CarouselButtons game={genre} category={true} />
		</section>
	);
}

export default CarouselGenres;
