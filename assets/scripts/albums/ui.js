'use strict'

const showAlbumsTemplate = require('../templates/album-listing.handlebars')

const getAlbumsSuccess = (data) => {
  const showAlbumsHtml = showAlbumsTemplate({ albums: data.albums })
  $('.content').append(showAlbumsHtml)
  $('#getAlbumsButton').attr('disabled', 'disabled')
}

const clearAlbums = () => {
  $('.content').empty()
  $('#getAlbumsButton').attr('disabled', false)
}

const deleteAlbumSuccess = (data) => {
  $('#album-message').show()
  $('#album-message').text('Album deleted')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
}

const createAlbumSuccess = (data) => {
  $('#albummessage').show()
  $('#album-message').text('Album added to collection')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
}

const updateAlbumSuccess = (data) => {
  $('#album-message').show()
  $('#album-message').text('Album updated')
  $('#album-message').fadeOut(2400)
  $('input[type=text]').val('')
}

const failure = (error) => {
  console.error(error)
  $('#album-message').show()
  $('#album-message').text('Something went wrong')
}

module.exports = {
  getAlbumsSuccess,
  clearAlbums,
  deleteAlbumSuccess,
  createAlbumSuccess,
  updateAlbumSuccess,
  failure
}
