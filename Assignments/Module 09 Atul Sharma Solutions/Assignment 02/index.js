let books = [
    {
        Author : "Bill gates",
        Title : "The Road Ahead",
        readingStatus : true
    },{
        Author : "Steve Jobs",
        Title : "Walter Isaacson",
        readingStatus : true
    },{
        Author : "Suzanne Collins",
        Title : "Mockingjay: The Final Book of The Hunger Games",
        readingStatus : false
    }
]

for(let book of books){
    if(book.readingStatus === true){
        console.log(`I already read ${book.Title} by ${book.Author.toUpperCase()}.`);
    } else{
        console.log(`I need to read ${book.Title} by ${book.Author.toUpperCase()}.`);
    }
   
}