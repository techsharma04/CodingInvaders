let person = [
    {
      name: "John",
      city: "Delhi"
    },
    {
      name: "Tony",
      city: "Mumbai"
    },
    {
      name: "Steve",
      city: "Bangalore"
    }
  ];
  
   person.forEach(function(obj) {
    obj.oneLineIntro = () => `This is ${obj.name} from ${obj.city}.`;
  });
  
  person.forEach(function(obj) {
    console.log(obj.oneLineIntro());
  });