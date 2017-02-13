const citySearch = document.querySelector('#textBox'); //quesry for actual text
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
