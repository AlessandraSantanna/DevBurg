const {Router} = require('express')


const routes =new Router()


routes.get('/', (request, response)=> {
    return response.status(200).json ({message: 'Hello World!'})
})
module.exports = routes