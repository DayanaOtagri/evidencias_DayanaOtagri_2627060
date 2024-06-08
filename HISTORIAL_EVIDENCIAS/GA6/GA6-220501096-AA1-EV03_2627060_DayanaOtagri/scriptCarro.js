const fs = require('fs');

const carroToInsert = [
    {
        "plate": "ABC123",
        "serial_number": "123456789",
        "model": "Sedan",
        "brand": "Toyota",
        "mileage": 50000,
        "type": "Car"
    },
    {
        "plate": "FRR123",
        "serial_number": "987654321",
        "model": "Ferrari 488",
        "brand": "Ferrari",
        "mileage": 15000,
        "type": "Sports Car"
      },
      {
        "plate": "MIN456",
        "serial_number": "123456789",
        "model": "Mini Cooper S",
        "brand": "Mini",
        "mileage": 30000,
        "type": "Hatchback"
      },
      {
        "plate": "KIA789",
        "serial_number": "234567890",
        "model": "Kia Picanto",
        "brand": "Kia",
        "mileage": 25000,
        "type": "Subcompact Car"
      },
      {
        "plate": "REN456",
        "serial_number": "345678901",
        "model": "Renault Logan",
        "brand": "Renault",
        "mileage": 35000,
        "type": "Sedan"
      }
      
];

fs.readFile('carro.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    }

    try {
        let existingcarro = JSON.parse(data);

        if (!Array.isArray(existingcarro)) {
            existingcarro = [existingcarro];
        }

        const combinedcarro = [...existingcarro, ...carroToInsert];

        const updatedcarro = JSON.stringify(combinedcarro, null, 5);

        fs.writeFile('carro.json', updatedcarro, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
            } else {
                console.log('Datos insertados con éxito en el archivo JSON.');
            }
        });
    } catch (error) {
        console.error('Error al analizar el contenido del archivo JSON:', error);
    }
});
