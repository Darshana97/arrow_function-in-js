// const sayHello = function(){

//     console.log('Hellooo');

// }

// const sayHello = () => {
//     console.log('Helloooo');
// }


//one line function no need braces
//const sayHello = () => console.log('Helloo');

//one line returns
// const sayHello = () => 'helloo';

//same as above
// const sayHello = function(){
//     return 'Helo';
// }

//return object
//const sayHello = () => ({msg: 'Helo'});

//single param does not need paranthesis
// const sayHello = name => console.log(`helloo ${name}`);

//multiple param paranthis
// const sayHello = (firstName,lastName) => console.log(`helloo ${firstName} ${lastName}`);

// sayHello('Achi', 'Senevirathna');


const users = ['Darshana', 'Pubudu', 'Bandara'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths); 