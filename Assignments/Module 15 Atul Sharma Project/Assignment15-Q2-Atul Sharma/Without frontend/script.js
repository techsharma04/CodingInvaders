class Movie {
  constructor() {
    this.cast = [];
  }

  add(castMemberName) {
    return this.cast.push(castMemberName);
  }

  display(){
    return this.cast;
  }

  size() {
    return this.cast.length - 1;
  }
}

let castStack = new Movie();




function promptBox1() {
  const promptOptions1 = Number(prompt(`Please enter one of the provided options to proceed.. \n\n 1. Add member\n 2. Show Cast`));
  if (promptOptions1 === 1) {
    promptBox2();
  } else if (promptOptions1 === 2) {
    showCast();
  } else {
    alert("Not a valid input. Please write the provided numbers only.");
    promptBox1();
  }
}

function promptBox2() {
  const promptOptions2 = prompt("Please enter the name here..");
  if (promptOptions2 !== null) {
    addCast(promptOptions2);
    if (confirm("Do you want to add more names..?") === true) {
      promptBox2();
    } else {
      promptBox1();
    }
  }else {
    promptBox1();
}

}

let addCast = (element) => {
  castStack.add(element)
  console.log(`${element} has added to the cast.`);
}

let showCast = () => {
  console.log(castStack.display());
}