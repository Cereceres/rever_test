const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: process.env.ELASTICSEARCH_URI || 'http://localhost:9200' })


module.exports = {
    insert: async (log)=>{
        const timestamp = new Date(Date.now())
        let formatted_date = timestamp.getDate() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getFullYear()
        await client.index({
            index: formatted_date,
            body: log
          })
    }
}