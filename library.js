"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var book_1 = require("./book");
//  part 2:
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // PART4: creating instances and adding functionality to library classes. 
    Library.prototype.getBook = function (title) {
        return this.books.find(function (book) { return book.title === title; });
        //  this find and return a book by title
    };
    Library.prototype.listBooks = function () {
        return this.books.map(function (book) { return book.getSummary(); }).join('\n');
        // This method returns all the books avaialable
    };
    //  PART5
    // creating a method to check for a book marked available or Unavavilable
    Library.prototype.checkOutBook = function (title) {
        var book = this.getBook(title);
        if (book) {
            if (book.isAvailable) {
                book.isAvailable = false;
                return "".concat(book.title, " is available.");
            }
            else {
                return "".concat(book.title, " is already checked out.");
            }
        }
        else {
            return "is Unavailable.";
        }
    };
    Library.prototype.getBooksByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    Library.prototype.removeBook = function (title) {
        var bookIndex = this.books.findIndex(function (book) { return book.title === title; });
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return "".concat(title, " has been removed from the library.");
        }
        else {
            return "Book not found in the library.";
        }
        //  this method remove a book by title and return an error msg "Book not found in the library"
        // when the book does not exist
    };
    return Library;
}());
exports.Library = Library;
// Example usage: 
var library = new Library();
var book1 = new book_1.Book("Purple Hibiscus", "Chimanda Ngozi Adiche", 2010);
var book2 = new book_1.Book("Things Fall-apart", "Chinua Achebe", 1990);
var book3 = new book_1.Book("Life Changer", "Khadija A. Jalli", 2021);
//   this create a book with title, author, year of publication 
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.checkOutBook("Life Changer"));
//    this find a book with a title
console.log(library.getBook("Things Fall-apart"));
console.log(library.listBooks());
//    this return all the books avaialable
console.log(library.getBooksByAuthor("Chinua Achebe"));
//    this returns a book by specific author
console.log(library.removeBook("Life Changer"));
//   this remove book by title and returns an error when trying to remove none existing book
// PART3:
var SpecialEditionBook = /** @class */ (function (_super) {
    __extends(SpecialEditionBook, _super);
    function SpecialEditionBook(title, author, year, specialFeature) {
        var _this = _super.call(this, title, author, year) || this;
        _this.specialFeature = specialFeature;
        return _this;
    }
    SpecialEditionBook.prototype.getSpecialSummary = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.year, ". Special feature: ").concat(this.specialFeature);
    };
    return SpecialEditionBook;
}(book_1.Book));
var specialBook = new SpecialEditionBook("Life Changer", "Khadija A. Jalli", 2021, "Collector's Edition");
console.log(specialBook.getSummary());
// get the summary for special edition book
console.log(specialBook.getSpecialSummary());
// this get the special edition summary
var ElectronicBook = /** @class */ (function (_super) {
    __extends(ElectronicBook, _super);
    // in MB format: string; // e.g., 'PDF', 'EPUB', etc. 
    function ElectronicBook(title, author, year, fileSize, format) {
        var _this = _super.call(this, title, author, year) || this;
        _this.fileSize = fileSize;
        _this.format = format;
        return _this;
    }
    ElectronicBook.prototype.getSummary = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.year, ". Format: ").concat(this.format, ", File Size: ").concat(this.fileSize, "MB. ").concat(this.isAvailable ? "Available" : "Checked Out");
    };
    return ElectronicBook;
}(book_1.Book));
var eBook = new ElectronicBook("Things Fall-apart", "Chinua Achebe", 1990, 2.5, "PDF");
console.log(eBook.getSummary());
// Output should list books by Harper Lee console.log(library.listBooks()); // Output should list all books in the library
