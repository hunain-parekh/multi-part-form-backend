const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    file.mimetype === 'application/pdf'
      ? cb(null, true)
      : cb(new Error('Only PDF files allowed!'));
  }
});

module.exports = upload;
