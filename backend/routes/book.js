const express = require("express");
const router = express();
const { isAuth } = require("../middlewares/AuthMiddleware");
const { addBook, getBooks, deletebook, updateBook } = require("../controllers/book.controller");

router.post("/addbook", addBook);
router.get("/getbooks", getBooks);
router.put("/updatebook/:id",updateBook);
router.delete("/deletebook/:id",deletebook);

module.exports = router;