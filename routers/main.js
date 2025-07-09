const express = require("express");
const router = express.Router();
const productController = require("../handlers/controller");

router.post("/", productController.createBook);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/", productController.getBooks);
router.post("/register", productController.register);
router.post("/order", productController.CreateOrders);
router.get("/order", productController.getOrders);
router.post("/login", productController.login);

module.exports = router;