const express = require('express');
const mongoose = require('mongoose');

const app = express();
const profiles = require('./routes/api/profiles')
const users = require('./routes/api/users')
const emissions = require('./routes/api/emissions')
const steps = require('./routes/api/steps')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err))

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/login', users)
app.use('/api/user', profiles)
app.use('/api/emissions', emissions)
app.use('/api/steps/', steps)

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server started on port ${port}`));

