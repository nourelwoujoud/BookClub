const express = require('express')

const Book=require('../models/BookModel')

const router = express.Router()


const {
    addBook,
    getAllBooks,
    toggleFavourite,
    deleteBook 
}=require("../controllers/Book")


router.get('/',getAllBooks)

router.post('/',addBook)

router.delete('/:id',deleteBook)


module.exports = router