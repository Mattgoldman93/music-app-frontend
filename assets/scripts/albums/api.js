'use strict'

const store = require('../store.js')
const config = require('../config')

const getCheck = function () {
  getAlbums()
    .then(data => {
      if (data.albums.length === 0) {
        $('#getAlbumsHide').hide()
        $('#content').hide()
      } else {
        $('#getAlbumsHide').show()
        $('#content').show()
        $('#getAlbumsButton').attr('disabled', false)
      }
    })
    .catch(error => console.error(error))
}

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
    url: config.apiOrigin + '/albums/' + data.album.id,
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
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateAlbum = function (data) {
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
  updateAlbum,
  getCheck
}
