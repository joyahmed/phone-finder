const searchPhone = document.getElementById('searchPhone');

searchPhone.addEventListener('keyup', e => {
	const phoneName = e.target.value;

	if (phoneName !== '') {
		getPhone(phoneName).then(p => {
			if (p.status) {
				console.log(p.data, p.status);
			}
		});
	}
});

const getPhone = async name => {
	const res = await fetch(
		`https://openapi.programming-hero.com/api/phones?search=${name}`,
		{ method: 'GET' }
	);

	const phone = await res.json();

	const { data, status } = phone;

	const length = data.length;

	return {
		data,
		status,
		length
	};
};
