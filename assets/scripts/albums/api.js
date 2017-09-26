'use strict'

const store = require('../store.js')
const config = require('../config')

const getAlbums = function () {
  return $.ajax({
    url: config.apiOrigin + '/albums',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAlbums
}
