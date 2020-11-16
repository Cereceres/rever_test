const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: process.env.ELASTICSEARCH_URI || 'http://localhost:9200' })


module.exports = {
    insert: async (log)=>{
        const timestamp = new Date(Date.now())
        let formatted_date = timestamp.getDate() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getFullYear()
        const res = await client.index({
            index: formatted_date,
            body: log
          })
        console.log('res ', res);
        return res
    },
    find: async(query, index)=>{
        const result = await client.search({
            index: index,
            body: {
              query
            }
          })
            console.log('results ', result.body);
          return result
    }
}