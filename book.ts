

export class Book { 
    title: string;
     author: string; 
     year: number;
      isAvailable: boolean; 
      constructor(title: string, author: string, year: number) {
         this.title = title; 
         this.author = author;
          this.year = year; 
          this.isAvailable = true;
         }
          getSummary(): string { 
            return `${this.title} by ${this.author}, published in ${this.year}.
             ${this.isAvailable ? "Available" : "Checked Out"}`;
         }
          getAge(): number {
             const currentYear = new Date().getFullYear(); 
             return currentYear - this.year;
             }
             }