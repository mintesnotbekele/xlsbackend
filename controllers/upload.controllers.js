const UploadFile = require('../models/upload.model');


const createUpload = (req, res) =>{ 
    // Add xls
    UploadFile.bulkCreate(
      req.body.uploads?.filter((item) => ({
        itemno: item?.ItemNo.toString().trim(),
        description: item?.Description.toString().trim(),
        qty: item?.Qty.toString().trim(),
        unit: item?.Unit.toString().trim(),
        amount: item?.Amount.toString().trim(),
        rate: item?.RatetoString().trim(),
      
      }))
    )

};

const deleteUploadedEntry = (req, res)=>{
  UploadFile.destroy({ where: { id: req.params?.id } })
    .then((upload) => {
      res.send({ message: "entry deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


const getUpload = (req, res) => {
  UploadFile.findByPk(req.query?.id || req.params?.id)
    .then((uploadedentry) => {
      res.send(uploadedentry);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const getUploadedEntries = (req, res) => {
    console.log("reached");
  UploadFile.findAll({
   
  })
    .then(async (uploadedEntries) => {
      res.send(uploadedEntries);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = {
  getUploadedEntries, getUpload, deleteUploadedEntry, createUpload
};
