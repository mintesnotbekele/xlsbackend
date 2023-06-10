const express = require('express');
const router = express.Router();
const controller = require('./controllers/upload.controllers.js');


router.post(
  "/createUpload",
  controller.createUpload
);

router.get('/', (req, res) => {
    res.send('world')
  });
router.delete(
  "/deleteUpload/:id",
  controller.deleteUploadedEntry
);

router.get(
    "/getup",(req, res) => {
        res.send('Hello World!')
      });

router.get(
  "/getUploadEntries",
  controller.getUploadedEntries
);

module.exports = router;

