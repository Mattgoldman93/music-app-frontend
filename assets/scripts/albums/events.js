'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetAlbums = (event) => {
  event.preventDefault()
  api.getAlbums()
    .then(ui.getAlbumsSuccess)
    .catch(ui.failure)
}

const onClearAlbums = (event) => {
  event.preventDefault()
  ui.clearAlbums()
}
const onRemoveAlbum = function () {
  event.preventDefault()
  $('#destroy-album').show()
  $('#delete-album').on('submit')
}
const onNewAlbum = function () {
  event.preventDefault()
  $('#create-album').show()
}
const onEditAlbum = function () {
  event.preventDefault()
  $('#update-album').show()
}

const addHandlers = () => {
  $('#getAlbumsButton').on('click', onGetAlbums)
  $('#clearAlbumsButton').on('click', onClearAlbums)
  $('#remove-album').on('click', onRemoveAlbum)
  $('#new-album').on('click', onNewAlbum)
  $('#edit-album').on('click', onEditAlbum)
}

module.exports = {
  addHandlers
}
