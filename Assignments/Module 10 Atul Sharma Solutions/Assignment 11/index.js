

let superHeroesArray = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'];

let result = superHeroesArray.map((eachSuperHero) => {
    return `${eachSuperHero} is present at ${superHeroesArray.indexOf(eachSuperHero)} index and has a length of ${eachSuperHero.length}` 
})

console.log(result);

