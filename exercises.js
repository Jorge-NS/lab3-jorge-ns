// FizzBuzz — print 1..n. Multiples of 3 become "Fizz",
// multiples of 5 become "Buzz", multiples of both become "FizzBuzz".
function fizzBuzz(n) {
  // your logic here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }else if (i % 3 === 0){
      console.log("Fizz");
    }else if (i % 5 === 0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
  }
}

// findMax — return the largest value in the array. No Math.max.
// Return undefined for an empty array.
const findMax = (numbers) => {
      // your logic here
  if (numbers.length === 0){
    return undefined;
  }
  let max = numbers[0];
  for (const num of numbers){
    if (num > max){
      max = num;
    }
  }
  return max;
}

// isPalindrome — ignore case, spaces, and punctuation.
function isPalindrome(str) {
  // your logic here
  const str_minusculas = str.toLowerCase();
  const str_sin_puntuacion = str_minusculas.replace(/[^a-z0-9]/g, "");
  let texto_al_reves = "";
  

  for (let i = str_sin_puntuacion.length - 1; i >= 0 ; i--){
    texto_al_reves = texto_al_reves + str_sin_puntuacion[i];
  }

  if (texto_al_reves === str_sin_puntuacion){
    return true;
  }
  else{
    return false;
  }
}

// Refactor at least one function above into an arrow function.

fizzBuzz(15);

console.assert(findMax([3, 7, 2, 9, 1]) === 9, "findMax basic");
console.assert(findMax([-5, -2, -9]) === -2, "findMax negatives");
console.assert(findMax([]) === undefined, "findMax empty");

console.assert(isPalindrome("racecar") === true, "isPalindrome basic");
console.assert(isPalindrome("A man, a plan, a canal: Panama") === true, "isPalindrome punctuation");
console.assert(isPalindrome("hello") === false, "isPalindrome false case");

// 
// 
// 

// Basic email shape validation. Return true or false.
function validateEmail(email) {
  // your logic here
  let validacion_punto = false;
  let validacion_arroba = false;
  for (const i of email){
    if (i === "@"){
      validacion_arroba = true;
    }else if (i === "." && validacion_arroba === true){
      validacion_punto = true;
    }
  }
  if (validacion_arroba === true && validacion_punto === true){
    return true;
  }else{
    return false;
  }
}

// At least 8 characters, one letter, and one digit.
function validatePassword(password) {
  // your logic here
  const password_minusculas = password.toLowerCase();

  const cadena_letras = "qwertyuiopasdfghjklñzxcvbnm"
  const cadena_numeros = "1234567890"

  let letra = false;
  let numero = false;

  for (let i = 0; i < password_minusculas.length; i++){
    if (letra && numero){
      break;
    }
    for (let j = 0; j < cadena_letras.length; j++){
      if (password_minusculas[i] === cadena_letras[j]){
        letra = true;
      }
    }
    for (let k = 0; k < cadena_numeros.length; k++){
        if (password_minusculas[i] === cadena_numeros[k]){
          numero = true;
      }
    }
  }
  if (password_minusculas.length < 8){
    return false;
  }else if (letra === false || numero === false){
    return false;
  }
  return true;
}

// Return { valid: true, errors: [] } or
// { valid: false, errors: ["...", "..."] }.
function validateLoginForm(email, password) {
  // your logic here
  let errors = [];
  let error_email = false;
  let error_password = false;

  if (validateEmail(email) == false){
    error_email = true;
  }
  if (validatePassword(password) == false){
    error_password = true;
  }
  if(error_email && error_password){
    errors = ["Email no válido", "Contraseña no válida"]
  }else if(error_email){
    errors = ["Email no válido"]
  }else if(error_password){
    errors = ["Contraseña no válida"]
  }

  if(errors.length > 0){
    return {valid: false, errors};
  }else{
    return {valid: true, errors: []};
  }
}

console.assert(validateEmail("fan@riverside.fc") === true, "email valid");
console.assert(validateEmail("fan@riversidefc") === false, "email needs a dot");
console.assert(validateEmail("fanriverside.fc") === false, "email needs an @");

console.assert(validatePassword("Season2026") === true, "password ok");
console.assert(validatePassword("short1") === false, "password too short");
console.assert(validatePassword("allletters") === false, "password needs a digit");

console.assert(validateLoginForm("fan@riverside.fc", "Season2026").valid === true, "form valid");
console.assert(validateLoginForm("nope", "x").errors.length === 2, "form reports both errors");

const pizzas_vendidas_por_dia = [19, 31, 24, 26, 45, 36, 39];
console.log("De lunes a domingo estas fueron nuestras pizzas vendidas cada día", pizzas_vendidas_por_dia);
console.log("Las pizzas que más vendimos en un día fueron:", findMax(pizzas_vendidas_por_dia));