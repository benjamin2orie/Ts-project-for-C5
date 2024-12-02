

import { Book } from './book'; 
//  part 2:
export class Library {
     books: Book[];
      constructor() { this.books = []; 

}
 addBook(book: Book): void { 
    this.books.push(book); 
}
// PART4: creating instances and adding functionality to library classes. 
getBook(title: string): Book | undefined {
     return this.books.find(book => book.title === title);
    //  this find and return a book by title
     }
      listBooks(): string { 
        return this.books.map(book => book.getSummary()).join('\n');
        // This method returns all the books avaialable
     } 


  
    //  PART5
    // creating a method to check for a book marked available or Unavavilable
     checkOutBook(title: string): string {
         const book = this.getBook(title); 
            if (book) {
             if (book.isAvailable) { book.isAvailable = false;
                 return `${book.title} is available.`;
                 } else {
                     return `${book.title} is already checked out.`;
                     } 
                    } else {
                         return `is Unavailable.`;
                         } 
                        }
                         getBooksByAuthor(author: string): Book[] { 
                            return this.books.filter(book => book.author === author);
                        }

                        removeBook(title: string): string {
                             const bookIndex = this.books.findIndex(book => book.title === title); if (bookIndex !== -1) {
                             this.books.splice(bookIndex, 1); return `${title} has been removed from the library.`;
                             } else { 
                                return `Book not found in the library.`;
                             } 
                            //  this method remove a book by title and return an error msg "Book not found in the library"
                            // when the book does not exist
                            }
                    }




                    // Example usage: 
                    const library = new Library();
                     const book1 = new Book("Purple Hibiscus", "Chimanda Ngozi Adiche", 2010); 
                     const book2 = new Book("Things Fall-apart", "Chinua Achebe", 1990);
                      const book3 = new Book("Life Changer", "Khadija A. Jalli", 2021);
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

                    class SpecialEditionBook extends Book { 
                        specialFeature: string; 
                        constructor(title: string, author: string, year: number, specialFeature: string) {
                             super(title, author, year); this.specialFeature = specialFeature;
                             }
                    
                             getSpecialSummary(): string { return `${this.title} by ${this.author}, published in ${this.year}. Special feature: ${this.specialFeature}`; 
                            }
                        }
                    
                        const specialBook = new SpecialEditionBook("Life Changer", "Khadija A. Jalli", 2021, "Collector's Edition");
                        console.log(specialBook.getSummary());
                        // get the summary for special edition book
                        console.log(specialBook.getSpecialSummary());
                        // this get the special edition summary


                        class ElectronicBook extends Book { 
                            fileSize: number; 
                            format: string;
                            // in MB format: string; // e.g., 'PDF', 'EPUB', etc. 
                            constructor(title: string, author: string, year: number, fileSize: number, format: string) {
                                 super(title, author, year);
                                  this.fileSize = fileSize; 
                                  this.format = format; 
                                } 
                                getSummary(): string { 
                                    return `${this.title} by ${this.author}, published in ${this.year}. Format: ${this.format}, File Size: ${this.fileSize}MB. ${this.isAvailable ? "Available" : "Checked Out"}`;
                                 } 

                                }

                                const eBook = new ElectronicBook("Things Fall-apart", "Chinua Achebe", 1990, 2.5, "PDF");
                                    console.log(eBook.getSummary());







                       // Output should list books by Harper Lee console.log(library.listBooks()); // Output should list all books in the library