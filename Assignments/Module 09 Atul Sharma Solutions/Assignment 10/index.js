function submitData() {

  let user = {
    fname: myForm.fname.value,
    lname: myForm.lname.value,
    email: myForm.email.value,
    city: myForm.city.value,
    gender: myForm.gender.value,
  };


  console.log(`This is ${user.fname} ${user.lname}, ${user.gender} from ${user.city} and my email id is ${user.email}`);
}


