const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')

app.use(cors())

//Connect database
connectDB()

//Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => 
    res.json({ msg: 'Welcome to the Digital RoloDex API'}))


//Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 4444
app.listen(PORT, () => console.log(`app running on ${PORT}`))