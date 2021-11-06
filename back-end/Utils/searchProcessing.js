const processSearch = (foundString, searchString) => {
	foundString = foundString.toLowerCase();
	searchString = searchString.toLowerCase();

	let foundStringArr = foundString.split(' ');
	let searchStringArr = searchString.split(' ');

	let foundStringConcated = '';
	let searchStringConcated = '';

	for (let i = 0; i < foundStringArr.length; i++) {
		foundStringConcated += foundStringArr[i];
	}

	for (let i = 0; i < searchStringArr.length; i++) {
		searchStringConcated += searchStringArr[i];
	}

	if (foundStringConcated.indexOf(searchStringConcated) > -1) return true;
	else return false;
};

module.exports = { processSearch };
