const axios = require('axios')

const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		)
		const usersIds = response.data.map(user => user.id)
		return mapArrToStrings(usersIds)
	} catch (error) {
	}
}

module.exports = getData 
