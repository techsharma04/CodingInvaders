let books = prompt("Enter the book titles separated by commas");
let booksArray = books.split(",");
let searchInput = prompt("Enter the specific book you want to find in the collection.");

if (booksArray.indexOf(searchInput) !== -1) {
    console.log(`Your items to buy \n A special gift -- set of stickers`);
    for (const book of booksArray) {
        console.log(book);
    }
} else {
    console.log(`Your items to buy:`);
    for (const book of booksArray) {
        console.log(book);
    }
}







