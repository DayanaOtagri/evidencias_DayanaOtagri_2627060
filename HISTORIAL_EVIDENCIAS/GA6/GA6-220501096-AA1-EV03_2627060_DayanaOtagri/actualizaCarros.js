const fs = require('fs');


fs.readFile('carro.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo JSON:', err);
    return;
  }

  try {

    const datos = JSON.parse(data);

  
    for (let i = 0; i < datos.length; i++) {
      if (datos[i].model === "Kia Picanto") {
        datos[i].model = "Aveo Family";
        datos[i].brand = "Aveo";
      }
    }

    const datosActualizados = JSON.stringify(datos, null, 2);

    fs.writeFile('carro.json', datosActualizados, 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo JSON:', err);
      } else {
        console.log('Datos actualizados con éxito en el archivo JSON.');
      }
    });
  } catch (error) {
    console.error('Error al analizar el contenido del archivo JSON:', error);
  }
});
