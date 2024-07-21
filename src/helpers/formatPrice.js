const formatPrice = price => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		useGrouping: false,
	})
		.format(price)
		.replace('€', '€')
		.replace(/\s/g, '');
};

export default formatPrice;
