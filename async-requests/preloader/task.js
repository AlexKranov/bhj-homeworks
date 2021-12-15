const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

const items = document.getElementById("items");
const image = document.getElementById("loader");

xhr.addEventListener('readystatechange', function() {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		image.classList.remove("loader_active");
		let currencyTable = JSON.parse(xhr.responseText).response.Valute;
		for (let key in currencyTable) {
			let itemCode = currencyTable[key].CharCode;
			let itemValue = currencyTable[key].Value;
			let change = `<div class="item">
			<div class="item__code">
    			${itemCode}
			</div>
			<div class="item__value">
    			${itemValue}
			</div>
			<div class="item__currency">
	    		руб.
			</div>
            </div>
			`;
			items.insertAdjacentHTML('beforeEnd', change);
		}
	}
});