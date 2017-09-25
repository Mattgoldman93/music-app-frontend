'use strict'

const app = require('../app.js')

const getAlbums = function () {
  return $.ajax({
    url: app.host + '/albums',
    method: 'GET'
  })
}

module.exports = {
  getAlbums
}
