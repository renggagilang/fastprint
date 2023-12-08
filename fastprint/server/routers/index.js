const produkController = require("../controllers/produkController");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "aman",
  });
});

router.get("/produks", produkController.getProduk);
router.post("/produks", produkController.createProduk);
router.get("/produks/:id", produkController.getProdukById);
router.put("/produks/:id", produkController.editProduk);
router.delete("/produks/:id", produkController.deleteProduk);

module.exports = router;
