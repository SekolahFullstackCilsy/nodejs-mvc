const express = require('express')
const cors = require('cors')
const exphbs = require('express-handlebars');

const productRouter = require('./routers/product')

const app = express()
const port = 8000

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use(cors())

app.use('/product', productRouter)
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal server error'
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})