const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/static/images/uploaded'));
  },
  filename: function (req, file, cb) {
    const imgName = Date.now() + path.extname(file.originalname);
    cb(null, imgName);
  }
});
const upload = multer({ storage });

// limits: { fileSize: 2000000 } //2mb

module.exports = upload;