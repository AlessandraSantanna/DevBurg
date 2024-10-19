//const {Routes} = require('express')
import {Routes} from 'express./app.js'
const routes =new Routes()


routes.get('/', (request, response)=> {
    return response.status(200).json ({message: 'Hello World!'})
})
//module.exports = routes
export default routes