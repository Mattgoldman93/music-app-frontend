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
  console.log('api reached' + data)
  return $.ajax({
    url: config.apiOrigin + '/albums/' + data.album.id,
    method: 'DELETE',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createAlbum = function (data) {
  console.log('api reached' + data)
  return $.ajax({
    url: config.apiOrigin + '/albums/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateAlbum = function (data) {
  console.log('api reached' + data)
  return $.ajax({
    url: config.apiOrigin + '/albums/' + data.album.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getAlbums,
  deleteAlbum,
  createAlbum,
  updateAlbum
}
