
// Se hace una clase persona 
// Atributios: Nombre, identificación, Fecha de Nacimiento 
// correo electronico, Ciudade de residencia, ciudad de origen 
//ademas un array de canciones favoritas 
class Persona {
    constructor(nombre, identificacion, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen) {
      this.nombre = nombre;
      this.identificacion = identificacion;
      this.fechaNacimiento = fechaNacimiento;
      this.correoElectronico = correoElectronico;
      this.ciudadResidencia = ciudadResidencia;
      this.ciudadOrigen = ciudadOrigen;
      this.cancionesFavoritas = [];
    }
  
//  Función agregar canciones favoritas que recibe como paramtros 
// artista y titulo
//  si es menor que tres se agrega de lo contrario no se agrega 

    agregarCancionFavorita(artista, titulo) {
      if (this.cancionesFavoritas.length < 3) {
        this.cancionesFavoritas.push({ artista, titulo });
        console.log(`Canción "${titulo}" de ${artista} agregada como favorita.`);
      } else {
        console.log("No se pueden agregar más de 3 canciones favoritas.");
      }
    }


  
    mostrarInformacionPersonal() {
      console.log("Información personal:");
      console.log("Nombre:", this.nombre);
      console.log("Identificación:", this.identificacion);
      console.log("Fecha de nacimiento:", this.fechaNacimiento);
      console.log("Correo electrónico:", this.correoElectronico);
      console.log("Ciudad de residencia:", this.ciudadResidencia);
      console.log("Ciudad de origen:", this.ciudadOrigen);
      console.log("Canciones favoritas:");
      this.cancionesFavoritas.forEach((cancion, index) => {
        console.log(`Canción ${index + 1}: ${cancion.titulo} - ${cancion.artista}`);
      });
    }
  }
  
  // Array de personas 
  const personas = [];
  
  // función que permite al usuario agregar la información 
  function agregarPersona() {
    const nombre = prompt("Ingrese el nombre de la persona:");
    const identificacion = prompt("Ingrese el número de identificación:");
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento:");
    const correoElectronico = prompt("Ingrese el correo electrónico:");
    const ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    const ciudadOrigen = prompt("Ingrese la ciudad de origen:");
  
    // Instancia de una persona  y la agrega con push
    const persona = new Persona(nombre, identificacion, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen);
    personas.push(persona);
  
    console.log("Persona agregada exitosamente.");
  }
  

  // Función que permite que ingrese la persona, además la parsea a INT 
  function mostrarInformacionPersonal() {
    const posicion = parseInt(prompt("Ingrese la posición de la persona en el vector:"));
  

    if (posicion >= 0 && posicion < personas.length) {
      const persona = personas[posicion];
      persona.mostrarInformacionPersonal();
    } else {
      console.log("Posición inválida.");
    }
  }
  
  function mostrarMenu() {
    let opcion;
  
    do {
      console.log("=== MENÚ ===");
      console.log("1. Agregar una persona");
      console.log("2. Mostrar información personal de una persona");
      console.log("0. Salir");
      opcion = parseInt(prompt("Ingrese una opción:"));
  
      switch (opcion) {
        case 1:
          agregarPersona();
          break;
        case 2:
          mostrarInformacionPersonal();
          break;
        case 0:
          console.log("Saliendo del programa.");
          break;
        default:
          console.log("Opción inválida.");
      }
    } while (opcion !== 0);
  }
  
  mostrarMenu();
 