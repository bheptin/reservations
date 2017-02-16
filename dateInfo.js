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
