const fs = require('fs');

fs.readFile('carro.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  try {
    const datos = JSON.parse(data);

    console.log('Carros en la colección:');
    datos.forEach((dato, index) => {
      console.log(`Registro ${index + 1}:`);
      console.log(dato);
    });
  } catch (error) {
    console.error('Error al analizar el contenido del archivo JSON:', error);
  }
});