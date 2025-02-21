function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Modify the function signature to accept an array
function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}
console.log(greeterArray(user));

// Solution 2: Iterate over the array
user.forEach(person => console.log(greeter(person)));