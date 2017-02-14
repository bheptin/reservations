const citySearch = document.querySelector('#textBox'); //query for actual text
const dataList = document.querySelector('#cities'); //query for datalist section. Where to put them


//Listening for key event then, mapping, turning info over to Axios for call
citySearch.addEventListener('keyup', function(e) {
  const search = e.target.value;
  getCities(search).then(cities => {
		const suggestions = cities.map(city => `<option value="${city}">`).join("\n");
		dataList.innerHTML = suggestions;
	})
});

//Axios call getting info from Teleport. Tried basic Fetch method, but wasn't able
//to get back info in logical return. Spread operator didn't play well.
const getCities = (search) => {
	return axios.get(`https://api.teleport.org/api/cities/?search=${search}`).then(response => {
    return response.data._embedded['city:search-results'].map(city => city.matching_full_name);
	})
};


const formatDate = (dateObj) => {
	let day = dateObj.getDate();
	day = day > 9 ? day : `0${day}`;
	let month = dateObj.getMonth() + 1;
	month = month.length > 9 ? month : `0${month}`;
	let year = dateObj.getFullYear();
	return `${year}-${month}-${day}`;
}

const getToday = () => {
	return new Date();
}

const getTomorrow = () => {
	let today = new Date();
	let tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);
	return tomorrow;
}


const checkIn = document.querySelector('.chkin');
const checkOut = document.querySelector('.chkout');

checkIn.addEventListener('click', function(d) {
  const newDate = d.target.value;
	console.log(newDate);
});


const today = getToday();
const todayFormat = formatDate(today);
const tomorrow = getTomorrow();
const tomorrowFormat = formatDate(tomorrow);

checkIn.setAttribute('min', todayFormat);
checkIn.setAttribute('value', todayFormat);

checkOut.setAttribute('min', tomorrowFormat);
checkOut.setAttribute('min', tomorrowFormat);
