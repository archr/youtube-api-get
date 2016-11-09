var querystring = require('querystring')
var rp = require('request-promise')

function Youtube(key) {
  this.key = key
  this.baseUrl = 'https://www.googleapis.com/youtube/v3/'
}

Youtube.prototype.createUrl = function (path, params) {
  return this.baseUrl + path + '?key=' + this.key + '&' + querystring.stringify(params)
}

Youtube.prototype.get = function (path, params) {
	return rp({
		uri: this.createUrl(path, params),
		json: true
	})
}

module.exports = Youtube
