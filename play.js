
const {connect} = require('./client.js')
const { setupInput } = require("./input.js")




console.log('connecting....')
let connectVar = connect();
setupInput(connectVar);

