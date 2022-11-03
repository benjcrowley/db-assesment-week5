const path = require('path')

module.exports = {

    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    },
    style: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.css"))
    },
    functionality: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.js"))
    }

}