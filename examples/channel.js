var Youtube = require('..')

var youtube = new Youtube('YOUR KEY')

youtube
  .get('channels', {
    part: 'snippet',
    id: 'UC1l7wYrva1qCH-wgqcHaaRg'
  }).then(function (res) {
    console.log(res)
  })

