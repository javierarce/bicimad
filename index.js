'use strict'

const request = require('request')
const rq = require('request-promise-native')

const URL = 'https://mynavega.emtmadrid.es/services/api/BiciMadrid/GetAllStationsInfo'

const get = (word) => {
  let options = { 
    method: 'POST',
    url: URL
  }

  return rq(options)
    .then(result => {
      let response = {}

      result = JSON.parse(result)

      if (result) {
        ['code', 'description', 'whoAmI', 'version', 'time'].forEach((i) => {
          response[i] = result[i]
        })

        response.data = JSON.parse(result.data)
      }

      return response
    }).catch((e) => {
      console.log(e);
    })
}

module.exports = { get }
