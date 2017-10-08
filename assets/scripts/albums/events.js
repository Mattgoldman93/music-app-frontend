'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAlbums = (event) => {
  event.preventDefault()
  api.getAlbums()
    .then(ui.getAlbumsSuccess)
    .catch(ui.failure)
}
// submit form buttons
const onDeleteAlbum = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteAlbum(data)
    .then(ui.deleteAlbumSuccess)
    .catch(ui.failure)
}
const onCreateAlbum = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createAlbum(data)
    .then(ui.createAlbumSuccess)
    .catch(ui.failure)
}
const onUpdateAlbum = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateAlbum(data)
    .then(ui.updateAlbumSuccess)
    .catch(ui.failure)
}

// buttons to reveal forms
const showFieldDelete = function () {
  $('#delete-album').show()
  $('#create-album').hide()
  $('#update-album').hide()
}
const showFieldCreate = function () {
  $('#create-album').show()
  $('#update-album').hide()
  $('#delete-album').hide()
}
const showFieldUpdate = function () {
  $('#update-album').show()
  $('#delete-album').hide()
  $('#create-album').hide()
}

const addHandlers = () => {
  $('#getAlbumsButton').on('click', onGetAlbums)
  $('#show-field-delete').on('click', showFieldDelete)
  $('#show-field-create').on('click', showFieldCreate)
  $('#show-field-update').on('click', showFieldUpdate)
  $('#update-album').on('submit', onUpdateAlbum)
  $('#create-album').on('submit', onCreateAlbum)
  $('#delete-album').on('submit', onDeleteAlbum)
  $('#clear').on('click', ui.clearAlbums)
}

module.exports = {
  addHandlers,
  onGetAlbums
}
