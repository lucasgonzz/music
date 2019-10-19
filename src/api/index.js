import config from './config'

var {apiKey} = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
export default function getArtists(country) {
		var url = URL.replace(':country', country)
		return fetch(url)
		.then(function(result) {
			var json = result.json()
			return json
		})
		.then(function(json) {
			// console.log(json)
			return json.topartists.artist
		})
	}
