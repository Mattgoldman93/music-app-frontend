'use strict'
const store = require('../store')
// const logic = require('../game/logic')
const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('Successfully signed up, go ahead and sign in!')
  $('#message').fadeOut(1800)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('Successfully signed in!')
  $('.initial-hide').show()
  $('.secondary-hide').hide()
  $('#message').fadeOut(1800)
  store.user = data.user
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').show()
  $('#message').text('Password changed!')
  $('#message').fadeOut(1800)
  $('input[type=password]').val('')
}

const signOutSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed out!')
  $('.initial-hide').hide()
  $('.table-hide').hide()
  $('.secondary-hide').show()
  $('#message').fadeOut(1800)
  store.user = null
}

const failure = function (error) {
  console.error(error)
  $('#message').show()
  $('#message').text('You messed up')
  $('#message').fadeOut(1800)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
