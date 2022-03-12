const searchPhone = document.getElementById('searchPhone');

searchPhone.addEventListener('keyup', e => {
	const phoneName = e.target.value;

	console.log(phoneName);
});
