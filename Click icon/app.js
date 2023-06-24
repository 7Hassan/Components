const express = require('express');
const bodyBarser = require('body-parser');
const app = express();
app.use(bodyBarser.urlencoded({ extended: false }));
app.use(bodyBarser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('demo'));
// Server
const port = 8000;
const Server = app.listen(port, listening);
function listening() {
    console.log("7Hassan");
}
