const watcher_by_changes = require('./watcher_for_changes')

module.exports  = (client)=>{
    client.db().watch().on('change',watcher_by_changes)
}