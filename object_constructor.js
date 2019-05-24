let name = "sandy";
document.write(name);



// ......... construcor................

function Person(name, eyecolor, age){
  this.name = name;
  this.eyecolor = eyecolor;
  this.age = age;
  document.write("your name is "+name+" wih eyecolour " +eyecolor+ " and your age is " +age);
}

//......... object creation.............

let person01 = new Person("sandy", "blue", 25);
console.log(person01);

let person02 = new Person("dilip", "brown", 21);
console.log(person02);
