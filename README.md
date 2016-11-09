# youtube-api-get
Made http request to the [youtube api](https://developers.google.com/youtube/v3/docs/)

## Installation
```sh
$ npm install youtube-api-get
```

## Usage
```js
var Youtube = require('youtube-api-get')
var youtube new Youtube('YOUR KEY')

// Get video by id
youtube.get('videos', {
  part: 'snippet',
  id: 'eVCfp8WuAA0'
}).then(function (res) { console.log(res) })

// Get channel by id
youtube.get('channels', {
  part: 'snippet',
  id: 'UC1l7wYrva1qCH-wgqcHaaRg'
}).then(function (res) { console.log(res) })
```

## License
MIT
