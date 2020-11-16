const {MongoClient} = require('mongodb');
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/test'
const listen_db_for_changes = require('./listen_db_for_changes')
let client  = undefined


module.exports = async ()=>{
    if (client) return client
    client = await new MongoClient(uri, {useUnifiedTopology: true}).connect()
    listen_db_for_changes(client)
    return client
}

