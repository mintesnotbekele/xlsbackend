const express = require('express')
const router = express.Router()
const controller = require('../controllers/upload.controllers.js');

router.get(
    "/getuploadentries",
    controller.getUploadedEntries
  );
  router.post(
    "/createupload",
    controller.createUpload
  );

module.exports = router