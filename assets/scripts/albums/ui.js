'use strict'

const showAlbumsTemplate = require('../templates/album-listing.handlebars')

const getAlbumsSuccess = (data) => {
  console.log(data)
  const showAlbumsHtml = showAlbumsTemplate({ albums: data.albums })
  $('.content').append(showAlbumsHtml)
  $('.remove-album').on('click', function () {
    if (confirm('Are you sure you want to delete this album') === true) {
      $(this).parents('ul').hide()
    }
  })
}

const clearAlbums = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getAlbumsSuccess,
  clearAlbums,
  failure
}
