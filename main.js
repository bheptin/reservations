const citySearch = document.querySelector('#cities');
const api = `https://api.teleport.org/api/cities/?search={city:search-by-text}`;



citySearch.addEventListener('keyup', function(e) {
      const search = e.target.value;
      getFilteredCities(search).then(cities => {
        const suggestions = citySearch.map(city => `<option value="${city}">`).join("\n");
        data.innerHTML = suggestions;
      })
});

const cityState = [];

fetch(api)
  .then(blob => blob.json())
  .then(curies => cityState.push(console.log(curies)))

function findMatch(citySearch, cityState) {
  return citySearch.filter(place => {

  });
}

findMatch('tus');
