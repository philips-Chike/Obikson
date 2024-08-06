
let Job_opening_1 = {
    position: "Branch Manager",
    flexibility: "part time",
    requirement: "Bsc",
    sex_requirment: "Male", 
    show_details() {
        console.log (`Position: ${this.position},\nflexibility: ${this.flexibility},\nrequirement: ${this.requirement},\nsex requirment: ${this.sex_requirment}`);
                    
    }
};

/**function create_vacancy(number_of_vacancies){
    const vacancies = [];
    for (let count=1; count<number_of_vacancies+1; count++){
        let a = `vacancy${count}`;
        vacancies.push(a);

    }
    new_vacancy = []
    vacancies.forEach(element => {
        element = Object.create(Job_opening_1);
        new_vacancy.push(element)
    });
    return new_vacancy
}**/

let newJobOpening;
function create_vacancy(number_of_vacancies) {
    const new_vacancies = []; // Array to store new job openings
  
    for (let count = 1; count < number_of_vacancies + 1; count++) {
      // Create a unique vacancy name
      const vacancyName = `vacancy${count}`;
  
      // Create a new instance of Job_opening_1 object for each vacancy
      newJobOpening = Object.create(Job_opening_1);
  
      // Customize the new job opening properties if needed
      newJobOpening.title = vacancyName; // For example, setting the title
  
      // Add the new job opening to the array
      new_vacancies.push(newJobOpening);
    }
  
    return new_vacancies;
  }
  

let Mystring = "how are yyou";
let new_a = Mystring.split()
let b = new_a.push('food', 'he', 'goos');
console.log(new_a);
new_a.splice(1,2);

console.log(new_a);


let Myarray = [1, 2, 3];
function d(x){
    return `--${x}--`;
}
let p = [1,6,3,4,5];
console.log(Myarray.map(d).toString());
console.log(p.sort())

console.log(p.splice(1, 2, 0, 0,8))
console.log(p); 
console.log(p.reduce((x,b)=>x+b, ))


document.write("Hello, this came from js");
