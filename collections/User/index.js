const getClient = require('../../storage/get_client')
const userSchema = require('./schema')
const watcher_by_changes = require('../../storage/watcher_for_changes')


const collectionName = 'users'

let client
let UserCollection
module.exports = {
    create: async (user)=>{
        client = client || await getClient()
        UserCollection = UserCollection || client.db().collection(collectionName);
        const { error, value } = userSchema.validate(user);
        console.log('value ========= ', value);
        console.log('error ====== ', error);
        if (error) await Promise.reject(error)

        return UserCollection.insertOne(value)
    }

}