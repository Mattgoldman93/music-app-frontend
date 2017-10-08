'use strict'
const api = require('./api')
const showAlbumsTemplate = require('../templates/album-listing.handlebars')

const refreshTable = () => {
  clearAlbums()
  api.getAlbums()
    .then(getAlbumsSuccess)
    .catch(failure)
}
const getCheck = function () {
  console.log('api.getCheck reached')
  api.getAlbums()
    .then(data => {
      console.log(data, data.albums, data.albums.length)
      if (data.albums.length === 0) {
        $('#getAlbumsHide').hide()
        $('#content').hide()
        $('.clear-hide').hide()
      } else {
        $('#getAlbumsHide').show()
        $('#content').show()
        $('#getAlbumsButton').attr('disabled', false)
        refreshTable()
      }
    })
    .catch(error => console.error(error))
}
const getAlbumsSuccess = (data) => {
  console.log('getalbumssuccess is run')
  const showAlbumsHtml = showAlbumsTemplate({ albums: data.albums })
  $('.content').text('')
  $('.content').append(showAlbumsHtml)
  $('.clear-hide').show()
}

const clearAlbums = () => {
  $('.content').empty()
  $('.clear-hide').hide()
}

const deleteAlbumSuccess = (data) => {
  $('#album-message').show()
  $('#album-message').text('Album deleted')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
  getCheck(data)
}

const createAlbumSuccess = (data) => {
  $('#albummessage').show()
  $('#album-message').text('Album added to collection')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
  getCheck(data)
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
  $('#album-message').text('Uh Oh. Something went wrong.')
  refreshTable()
}

module.exports = {
  refreshTable,
  getCheck,
  getAlbumsSuccess,
  clearAlbums,
  deleteAlbumSuccess,
  createAlbumSuccess,
  updateAlbumSuccess,
  failure
}
