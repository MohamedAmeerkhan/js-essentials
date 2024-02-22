let person={
    name:'John',
    age:'27'
};
person.name="Cena";
person['name']="John Cena";
console.log(person.name,person.age);

let selectedColors=['red','blue','green'];
console.log(typeof selectedColors);
selectedColors[3] = "grey"
selectedColors[4] = 123;
console.log(selectedColors);
console.log(`length of the array`,selectedColors.length);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
