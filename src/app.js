const express = require("express");
const app = express();

const bookModel = require("./model/book.Model");
app.use(express.json());



app.post("/addbook", async (req, res) => {
    try {
        const { title, author, publishYear, price, description } = req.body;

        const newBook = await bookModel.create({
            title: title,
            author: author,
            publishYear: publishYear,
            price: price,
            description: description
        });

        res.status(201).json({
            message: "Book added successfully",
            book: newBook
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


app.get("/display_books", async (req, res) => {
    try {
        const books = await bookModel.find();

        res.status(200).json({
            message: "Books fetched successfully",
            books: books
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.patch("/update_book/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { title, author, publishYear, price, description } = req.body;

        await bookModel.findOneAndUpdate(
            { _id: id }, 
            { title:title, author:author, publishYear:publishYear, price:price, description:description }
        );

        res.status(200).json({
            message: "Book updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
   
app.delete("/delete_book/:id", async (req, res) => {
    try {
        const id = req.params.id;   
        await bookModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = app;