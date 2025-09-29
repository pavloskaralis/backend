const { createClient } = require('redis')
const client = createClient()

client.on('error', (err) => console.log('Redis Client Error', err))
client.on('connect', () => console.log('Redis client connected'))
client.on('ready', () => console.log('Redis client ready'))

client.connect()

module.exports = client
