import mysql.connector

# Conectar a la base de datos
conexion = mysql.connector.connect(
    host="bywxnozdxmmfaqotqqyq-mysql.services.clever-cloud.com",
    user="uudrqejpku8guudy",
    password="z0YntqpFTNijmpw2ZXPd",
    database="bywxnozdxmmfaqotqqyq"
)

cursor = conexion.cursor()

# Consulta INSERT con placeholders
consulta = """
INSERT INTO Producto (Nombre, Descripcion, Precio, Stock)
VALUES (%s, %s, %s, %s)
"""

# Valores a insertar
valores = ("Pelota de Futbol", "Pelota de cuero profesional", 1500, 30)

# Ejecutar e insertar
cursor.execute(consulta, valores)

# Confirmar los cambios
conexion.commit()

print("✅ Producto insertado correctamente.")

# Cerrar conexión
cursor.close()
conexion.close()
