var Youtube = require('..')

var youtube = new Youtube('YOUR KEY')

youtube
  .get('videos', {
    part: 'snippet',
    id: 'eVCfp8WuAA0'
  }).then(function (res) {
    console.log(res)
  })
