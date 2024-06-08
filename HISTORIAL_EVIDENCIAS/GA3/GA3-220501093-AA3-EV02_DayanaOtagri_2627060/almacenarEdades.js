function calcularEstadisticasEdades(edades) {

    let MenoresEdad = 0;
    let MayoresEdad = 0;
    let AdultosMayores = 0;
    let edadMinima = Infinity;
    let edadMaxima = -Infinity;
    let sumaEdades = 0;
  
    // Permite recorrer las edades
    for (let i = 0; i < edades.length; i++) {
      const edad = edades[i];
  
      // Permite validar que las edades esten dentro del rango establecido
      if (edad < 1 || edad > 120) {
        console.log("Error: La edad ingresada está fuera del rango permitido.");
        i--; // Si hay un error permite retroceder  para solicitar un nuevo valor
        continue;
      }
  
      // Incrementar 
      if (edad < 18) {
        MenoresEdad++;
      } else {
        MayoresEdad++;
        if (edad >= 60) {
          AdultosMayores++;
        }
      }
  
      // Actualizar las edades
      if (edad < edadMinima) {
        edadMinima = edad;
      }
      if (edad > edadMaxima) {
        edadMaxima = edad;
      }
  
      // Sumar la edad y calular promedios 
      sumaEdades += edad;
    }
  
    // Calcular el promedio de edades
    const promedio = sumaEdades / edades.length;
  
    
    console.log("Cantidad de personas menores de edad:", MenoresEdad);
    console.log("Cantidad de personas mayores de edad:", MayoresEdad);
    console.log("Cantidad de adultos mayores:", AdultosMayores);
    console.log("Edad más baja:", edadMinima);
    console.log("Edad más alta:", edadMaxima);
    console.log("Promedio de edades:", promedio);
  }
  
  
  const edades = [25, 18, 42, 60, 12, 30, 75, 50, 9, 65];
  calcularEstadisticasEdades(edades);