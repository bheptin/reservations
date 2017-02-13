const citySearch = document.querySelector('#cities');
const dataList = document.querySelector('#cityList');
const api = `https://api.teleport.org/api/cities/?search=${citySearch}`;



citySearch.addEventListener('keyup', function(e) {
      const search = e.target.value;
      pullCities(citySearch).then(cities => {
        const filteredCity = cityList.map(city => `<option value="${cityList}">`).join("\n");
        dataList.innerHTML = suggestions;
      })
});

const cityState = [];

fetch(api)
  .then(blob => blob.json())
  .then(data => (console.log(data)));
