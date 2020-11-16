const elasticClient = require('./elastic_client')

module.exports = (event)=>elasticClient.insert(event)