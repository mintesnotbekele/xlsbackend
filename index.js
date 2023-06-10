const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const router = express.Router();
const uploadRoutes = require('./routes/uploadroutes');


//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})


const app = express();
app.use(cors("*"));
app.use('/upload', uploadRoutes)

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


const PORT = process.env.PORT || 3005;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));
