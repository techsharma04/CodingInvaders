let age = prompt("Please enter your age first");
let movies = ["The Batman", "Don't Look Up", "Against the Ice", "Sing 2", "Love Hard"];
let str;
if(age < 18){
    movies[movies.indexOf("The Batman")] = "Coco";
    movies[movies.indexOf("Against the Ice")] = "Free guy";
    str = movies.join();
    console.log(`Why wouldn't you watch these movies: \n ${str}`);
} else {
    str = movies.join();
    console.log(`${str}`);
}
   





