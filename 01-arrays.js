// Array Length
const cars = ["Toyota", "Ford", "Audi", "Jaguar", "Suzuky", "Renault", "Audi"];
let size = cars.length;
console.log(cars);

// Array Push -- Agrega elementos al final del Array.
cars.push("Buggati", "Mercedes Benz");
console.log(cars);

// Array Pop -- Elimina el ultimo elemento del Array.
let removeCar = cars.pop();
console.log(cars);

// Array Shift -- Remueve el primer elemento del Array.
let removeCar2 = cars.shift();
console.log(cars);

// Array Unshift -- Agrega el primer elemento del Array.
cars.unshift("Bentley", "Hyundai");
console.log(cars);

// Array IndexOf -- Buscar el índice de la primera aparición de un elemento específico.
let firstIndex = cars.indexOf("Audi");
console.log(firstIndex);

// Array LastIndexOf -- Buscar el índice de la ultima aparición de un elemento específico.
let lastIndex = cars.lastIndexOf("Audi");
console.log(lastIndex);

// Array Filter -- Crea un array que cumplen con cierta condición. 
const edad = [18, 45, 22, 9, 12, 32];
let edadAdultos = edad.filter((edad) => edad >= 25);
console.log(edadAdultos);

// Array Reduce -- Reduce los elementos de un array a un solo valor.
let edadTotal = edad.reduce((sum, edad) => sum + edad, 0);
console.log(edadTotal);

// Array Every -- Comprobar si todos los elementos cumplen con la condición.
let edadMenores = edad.every((edad) => edad < 18);
console.log(edadMenores);

// Array Some -- Comprobar si al menos uno de los elementos cumple con la condición.
let edadMasGrande = edad.some((edad) => edad > 60);
console.log(edadMasGrande);