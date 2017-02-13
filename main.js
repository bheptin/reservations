const citySearch = document.querySelector('#cities');
const dataList = document.querySelector('#textBox');

citySearch.addEventListener('keyup', function(e) {
  const search = e.target.value;
  console.log(search);
  getFilteredCities(search).then(cities => {
		const suggestions = cities.map(city => `<dataList value="${city}">`).join("\n");
		dataList.innerHTML = suggestions;
	})
});

const getFilteredCities = (search) => {
	return axios.get(`https://api.teleport.org/api/cities/?search=${search}`).then(response => {
    return response.data._embedded['city:search-results'].map(city => city.matching_full_name);
    console.log(response.data);
	})
}
