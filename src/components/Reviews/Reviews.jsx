import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
	return (
		<div className={css.reviews}>
			{reviews.map((review, index) => (
				<div key={index} className={css.review}>
					<div className={css.avatar}>{review.reviewer_name.charAt(0)}</div>
					<div className={css.details}>
						<p className={css.name}>{review.reviewer_name}</p>
						<div className={css.rating}>
							{[...Array(5)].map((star, i) => (
								<span
									key={i}
									className={
										i < review.reviewer_rating ? css.filledStar : css.emptyStar
									}
								>
									★
								</span>
							))}
						</div>
						<p className={css.comment}>{review.comment}</p>
					</div>
				</div>
			))}
		</div>
	);
}
