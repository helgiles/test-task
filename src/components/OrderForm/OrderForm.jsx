import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './OrderForm.module.css';

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Name is required')
		.min(3, 'Name must be greater than or equal to 3 characters long')
		.max(40, 'Name must be less than or equal to 40 characters long'),
	email: yup
		.string()
		.email('Please enter a valid email address')
		.required('Email is required'),
	bookingDate: yup
		.date()
		.nullable()
		.transform((value, originalValue) => (originalValue === '' ? null : value))
		.required('Booking date is required. Please select a booking date.')
		.min(today, 'Booking date must be today or in the future'),
	comment: yup.string(),
});

export default function OrderForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		console.log(data);

		window.location.reload();
	};

	return (
		<form className={css.orderForm} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.formGroup}>
				<input id='name' type='text' placeholder='Name' {...register('name')} />
				{errors.name && <p className={css.error}>{errors.name.message}</p>}
			</div>

			<div className={css.formGroup}>
				<input
					id='email'
					type='email'
					placeholder='Email'
					{...register('email')}
				/>
				{errors.email && <p className={css.error}>{errors.email.message}</p>}
			</div>

			<div className={css.formGroup}>
				<input
					id='bookingDate'
					type='date'
					placeholder='Booking Date'
					{...register('bookingDate')}
				/>
				{errors.bookingDate && (
					<p className={css.error}>{errors.bookingDate.message}</p>
				)}
			</div>

			<div className={css.formGroup}>
				<textarea id='comment' placeholder='Comment' {...register('comment')} />
			</div>

			<button type='submit'>Submit</button>
		</form>
	);
}
