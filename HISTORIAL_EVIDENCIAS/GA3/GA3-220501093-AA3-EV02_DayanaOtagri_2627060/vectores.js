const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MAX_SIZE = 5;

function readVector(vectorName, callback) {
  rl.question(`Ingrese los números del vector ${vectorName} (orden ascendente, separados por espacios): `, input => {
    const numbers = input.split(' ').map(Number);

    if (numbers.length !== MAX_SIZE) {
      console.log(`El vector debe contener exactamente ${MAX_SIZE} elementos.`);
      readVector(vectorName, callback);
      return;
    }

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] <= numbers[i - 1]) {
        console.log(`El vector ${vectorName} debe estar ordenado ascendentemente.`);
        readVector(vectorName, callback);
        return;
      }
    }

    callback(numbers);
  });
}

function mergeAndSortVectors(vector1, vector2) {
  const mergedVector = [...vector1, ...vector2];
  mergedVector.sort((a, b) => a - b);
  return mergedVector;
}

readVector('A', vectorA => {
  readVector('B', vectorB => {
    const mergedSortedVector = mergeAndSortVectors(vectorA, vectorB);
    console.log('Lista ordenada de la mezcla de los vectores:', mergedSortedVector);
    rl.close();
  });
});