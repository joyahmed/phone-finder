class UI {
	constructor() {
		this.phones = document.getElementById('phones');
	}

	showPhones(phone, length) {
		let output = `<div class='font-bold'>Found ${length} Phones</div>`;

		phone.map(p => {
			output += `
				<div class='flex flex-col w-full rounded-md bg-gray-200 px-5 py-5 my-2'>
					<div class='flex flex-col justify-between'>
						<div>Brand: ${p.brand}</div>
						<div>Name: ${p.phone_name}</div>
					</div>
					<div><img src="${p.image}"/></div>
				</div>
			`;
		});
		this.phones.innerHTML = output;
	}
}
