'use strict'
const store = require('../store')
// const logic = require('../game/logic')
const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('Successfully signed up, go ahead and sign in!')
  $('#message').fadeOut(1800)
}

const signInSuccess = function (data) {
  $('#siMessage').show()
  $('#siMessage').text('Success!')
  $('.initial-hide').show()
  $('.secondary-hide').hide()
  $('#siMessage').fadeOut(1800)
  store.user = data.user
}

const changePasswordSuccess = function (data) {
  $('#cpwMessage').show()
  $('#cpwMessage').text('Password changed!')
  $('#cpwMessage').fadeOut(1800)
}

const signOutSuccess = function (data) {
  $('#soMessage').show()
  $('#soMessage').text('Signed out!')
  $('.initial-hide').hide()
  $('.secondary-hide').show()
  $('#soMessage').fadeOut(1800)
  store.user = null
}

const failure = function (error) {
  console.error(error)
  $('#soMessage').show()
  $('#soMessage').text('You messed up')
  $('#soMessage').fadeOut(1800)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
