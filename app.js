
let numeroCinco = 5;
let stringCinco = '5';

let numeroCincuenta = 50;
let stringCincuenta = '50';

let numeroQuince = 15;
let stringQuince = '15';

if (numeroCinco == stringCinco) {  // Comparación de valor, sin importar el tipo
  console.log('Las variables numeroCinco y stringCinco tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroCinco y stringCinco no tienen el mismo valor');
}

if (numeroCincuenta === stringCincuenta) {  // Comparación de valor y tipo
  console.log('Las variables numeroCincuenta y stringCincuenta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroQuince y stringQuince no tienen el mismo tipo');
}

if (numeroQuince == stringQuince) {  // Comparación de valor, sin importar el tipo
  console.log('Las variables numeroQuince y stringQuince tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroQuince y stringQuince no tienen el mismo valor');
}
