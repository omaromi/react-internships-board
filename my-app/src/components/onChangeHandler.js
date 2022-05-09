const handleFirstNameInputChange = (e) => {
	e.persist();
	setValues((values) => ({
		...values,
		firstName: e.target.value,
	}));
};