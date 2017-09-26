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

const onClearAlbums = (event) => {
  event.preventDefault()
  ui.clearAlbums()
}
// submit form buttons
const onDeleteAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.deleteAlbum(data)
}
const onCreateAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.deleteAlbum(data)
}
const onUpdateAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.deleteAlbum(data)
}
// buttons to reveal forms
const onRemoveAlbum = function () {
  event.preventDefault()
  $('#destroy-album').show()
  $('#new-album').hide()
  $('#patch-album').hide()
  $('#delete-album').on('submit', onDeleteAlbum)
}
const onAddAlbum = function () {
  event.preventDefault()
  $('#new-album').show()
  $('#patch-album').hide()
  $('#destroy-album').hide()
  $('#create-album').on('submit', onCreateAlbum)
}
const onEditAlbum = function () {
  event.preventDefault()
  $('#patch-album').show()
  $('#destroy-album').hide()
  $('#new-album').hide()
  $('#update-album').on('submit', onUpdateAlbum)
}

const addHandlers = () => {
  $('#getAlbumsButton').on('click', onGetAlbums)
  $('#clearAlbumsButton').on('click', onClearAlbums)
  $('#remove-album').on('click', onRemoveAlbum)
  $('#add-album').on('click', onAddAlbum)
  $('#edit-album').on('click', onEditAlbum)
}

module.exports = {
  addHandlers
}
