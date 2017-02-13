const citySearch = document.querySelector('#textBox');
const dataList = document.querySelector('#cityList');
const api = `https://api.teleport.org/api/cities/?search=${citySearch}`;


const cityState = [];

fetch(api)
  .then(blob => blob.json())
  .then(data => (console.log(data)))
