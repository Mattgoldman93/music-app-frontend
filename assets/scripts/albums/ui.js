'use strict'

const showAlbumsTemplate = require('../templates/album-listing.handlebars')

const getAlbumsSuccess = (data) => {
  console.log(data)
  console.log(data.albums)
  const showAlbumsHtml = showAlbumsTemplate({ albums: data.albums })
  $('.content').append(showAlbumsHtml)
  $('#getAlbumsButton').attr('disabled', 'disabled')
}

const clearAlbums = () => {
  $('.content').empty()
  $('#getAlbumsButton').attr('disabled', false)
}

const deleteAlbumSuccess = (data) => {
  $('#delete-album').hide()
  clearAlbums()
}

const createAlbumSuccess = (data) => {
  console.log(data)
  console.log(data.albums)
  $('#create-album').hide()
  clearAlbums()
}

const updateAlbumSuccess = (data) => {
  console.log(data)
  console.log(data.albums)
  $('#update-album').hide()
  clearAlbums()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getAlbumsSuccess,
  clearAlbums,
  deleteAlbumSuccess,
  createAlbumSuccess,
  updateAlbumSuccess,
  failure
}
