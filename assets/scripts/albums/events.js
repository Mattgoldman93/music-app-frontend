'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetAlbums = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getAlbumsSuccess)
    .catch(ui.failure)
}

const onClearAlbums = (event) => {
  event.preventDefault()
  ui.clearAlbum()
}

const addHandlers = () => {
  $('#getAlbumsButton').on('click', onGetAlbums)
  $('#clearAlbumsButton').on('click', onClearAlbums)
}

module.exports = {
  addHandlers
}
