const input = document.querySelector('#fruit');
const searchWrapper = document.querySelector('.search-container');
const inputBox = document.querySelector('input');
const suggestionBox = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(e) {
	let inputData = e.target.value;
	let results = [];

	if (inputData) {
			results = fruit.filter((data)=>{
			return data.toLocaleLowerCase().includes(inputData.toLocaleLowerCase());
	});
			results = results.map((data)=>{
			return data = '<li>'+ data +'</li>';
	})
			console.log(results);
			searchWrapper.classList.add("active");
			showSuggestions(results);
			let allList = suggestionBox.querySelectorAll('li');
			for (let i = 0; i < allList.length; i++) {
				allList[i].setAttribute('onclick', 'useSuggestion(this)');
			};
	}else{
			searchWrapper.classList.remove("active");
	}
}

function showSuggestions(list) {
	let listData;
	if(!list.length){
			userValue = inputBox.value;
			listData = '<li>'+ userValue +'</li>';
	}else{
			listData = list.join('');
	}
			suggestionBox.innerHTML = listData;
}

function useSuggestion(element) {
	let selectInputData = element.textContent;
			inputBox.value = selectInputData;
}

		inputBox.addEventListener('keyup', search);