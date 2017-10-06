'use strict'
const api = require('./api.js')
const showAlbumsTemplate = require('../templates/album-listing.handlebars')
const refreshTable = () => {
  clearAlbums()
  api.getAlbums()
    .then(getAlbumsSuccess)
    .catch(failure)
}
const getAlbumsSuccess = (data) => {
  const showAlbumsHtml = showAlbumsTemplate({ albums: data.albums })
  $('.content').text('')
  $('.content').append(showAlbumsHtml)
}

const clearAlbums = () => {
  $('.content').empty()
}

const deleteAlbumSuccess = (data) => {
  $('#album-message').show()
  $('#album-message').text('Album deleted')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
  api.getCheck()
  refreshTable()
}

const createAlbumSuccess = (data) => {
  $('#albummessage').show()
  $('#album-message').text('Album added to collection')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
  api.getCheck()
  refreshTable()
}

const updateAlbumSuccess = (data) => {
  $('#album-message').show()
  $('#album-message').text('Album updated')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
  refreshTable()
}

const failure = (error) => {
  console.error(error)
  $('#album-message').show()
  $('#album-message').text('Something went wrong')
  refreshTable()
}

module.exports = {
  getAlbumsSuccess,
  clearAlbums,
  deleteAlbumSuccess,
  createAlbumSuccess,
  updateAlbumSuccess,
  failure
}
