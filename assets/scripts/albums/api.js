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
const deleteAlbum = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + store.data.id,
    method: 'DELETE',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createAlbum = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/albums/',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getAlbums,
  deleteAlbum,
  createAlbum
}
