const app = require('./app')
const port = process.env.APIPORT || 3333
app.listen(port || 3333, ()=>console.log('listening on PORT '+port))