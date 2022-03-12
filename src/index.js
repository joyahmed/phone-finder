const ui = new UI();

const searchPhone = document.getElementById('searchPhone');

const phones = document.getElementById('phones');

searchPhone.addEventListener('keyup', e => {
	const phoneName = e.target.value;

	if (phoneName !== '') {
		getPhone(phoneName).then(p => {
			if (!p.status) {
				ui.showAlert('Phone not found', 'alert');
				ui.clearPhone();
			} else {
				ui.showPhones(p.data, p.length);
			}
		});
	} else {
		ui.clearPhone();
	}
});


const getPhone = async name => {

	const res = await fetch(
		`https://openapi.programming-hero.com/api/phones?search=${name}`,
		{ method: 'GET' }
	);

	const phone = await res.json();

	const { data, status } = phone;

	const length = data.length

	return {
		data,
		status,
		length
	};
};
