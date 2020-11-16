module.exports = async(client)=>{
    await client.close()

    return client
}