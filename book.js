"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }
    Book.prototype.getSummary = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.year, ".\n             ").concat(this.isAvailable ? "Available" : "Checked Out");
    };
    Book.prototype.getAge = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };
    return Book;
}());
exports.Book = Book;
