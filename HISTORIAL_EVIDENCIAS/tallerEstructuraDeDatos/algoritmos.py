# 1. Un corredor de maratón (distancia 42 195 Km) ha recorrido la carrera en 2 horas 25 minutos Se desea un
#algoritmo que calcule el tiempo medio en minutos por kilómetro

#kilometrosRecorridos = 42195  
#tiempoEnHoras = 2
#tiempoEnMinutos = 25 

#tiempoTotalEnMinutos = tiempoEnHoras * 60 + tiempoEnMinutos

#kilometrosRecorridosPorMinuto = tiempoTotalEnMinutos / kilometrosRecorridos 

#print(kilometrosRecorridosPorMinuto)

###################################################################################

#2. Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit (Fórmula F
# 9 5 C 32


#def convertidorCentridosAFahrenheit (gradosCentigrados): 
#    gradosFahrenheit = (9/5) * gradosCentigrados + 32
#    return "La temperatura en grados Fahrenheit es:", gradosFahrenheit, "°F"


#print(convertidorCentridosAFahrenheit(60))



#3. Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “analisis" para un
#estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30 de
#la nota y el resto 70 corresponde a la nota del examen parcial



#def calcularNotaFinal(taller1, taller2, quiz, examenParcial):
#    notaTaller1 = taller1 * 0.1
#    notaTaller2 = taller2 * 0.1
#    notaQuiz = quiz * 0.1 
#    notaExamenParcial = examenParcial * 0.7 
    
#    notaTotal = notaTaller1 + notaTaller2 + notaQuiz + notaExamenParcial
    
#    return "La nota final es: " + str(notaTotal)


#print(calcularNotaFinal(4,4,5,6))

# 5. Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a 25

def numerosMenoresOIgualesA25(): 
    
    #Se hace un array para almacenar los números
    numeros = []
    
    # Realizo una iteración que permita el ingreso de números
    # recorra los números ingresados y valide que sean menor o igual a 25
    # el rango se establece en 20 números
    
    for i in range(20):
        numero = int(input("Por favor ingrese un número:" ))
        #Aquí se establce el condicional 
        if numero >= 25: 
            #Si son validos se agregan a la variable de
            # scope global que se estableció antes de la función
            numeros.append(numero)
            
    # Se hace una iteracion de para que muestre 
    # los números agregados en la varieble numeros
    
        
    print("Los números ingresados que son menores o iguales a 25 son:")
    for numero in numeros:
        print(numero)
        
        
numerosMenoresOIgualesA25()


# 6. Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en pesos

def calcularPrecioVenta(): 
    
    #Esta variable almacena el valor del precio Colombiano
    pesoColombiano = 4500
    
    #Está varible tendrá la suma de los precios que ingresen
    totalDolares = 0 
    
    #Se hace una iteracion por la cantidad 
    # de precios ingresados y se van sumando 
    for i in range(5): 
        precioCamisa = float(input("Ingrese el precio de la camisa: "))
        totalDolares += precioCamisa
        
    # Se hace la conversion multiplicando 
    # el total de dolares por el valor del dolar 
    # en Colombia y se almacena en una variable 
    totalPesos = totalDolares * pesoColombiano
    
    print("El precio total de la venta en pesos colombianos es de: " + str(totalPesos))
        
        
        
# 7. Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo de
#cada cliente excede 50000 se hará un descuento del 20 Se debe mostrar el pago de cada cliente y el
# total de todos los pagos

def calculoPagoDeClientes(): 
    
    #Se inicializa una variable en 0 
    # para que almacene la suma de pagos 
    totalPagos = 0
    
    #La variable almacena el número de clientes que se ingresen
    numeroDeCliente = int(input("Ingresar el número de clientes: "))
    
    for i in range(numeroDeCliente): 
        consumo = float(input("Ingresar el consumo del cliente: "))
        
        # condicional de que el consumo 
        # tiene que ser supero a 5000 
        if consumo > 50000: 
            #Si ese consumo cumple la condicion se 
            # aplica un descuento del 20% 
            descuento =  consumo * 0.2 
            pagoDeCliente = consumo - descuento
        # de no ser superior no aplica descuento 
        else: 
            pagoDeCliente = consumo 
            
        totalPago += pagoDeCliente
        
        print("El pago del cliente es de:" + str(pagoDeCliente)) 
    print("El total de pagos es de:" + str(totalPago))
    
    
# 9. Dado N, escribir el producto desde 1 hasta N

def calculoProducto(N): 
    
    #Dado que el producto comienza en 1 se 
    # declara una variable con ese valor incial
    producto = 1
    
    #Se hace una iteración que tiene como rango 1 a N números
    for i in range(1, N+1):
        # A medida que hace la iteración va agregando a la varianle
        producto *= i     
    return producto 

# Se solicia el valor para N
N = int(input("Ingresar el valor de N: "))

#Se guarda en una variable el resultado 
# llamando la funcion calculoProducto

resultado = calculoProducto(N)