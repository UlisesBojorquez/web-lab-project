import sqlite3
import json

#CONEXION CON LA BASE DE DATOS
def db(database_name='hospitalradar.db'):
    return sqlite3.connect(database=database_name)

def query_db(query, args=(), one=False):
    cur = db().cursor()
    cur.execute(query, args)
    r = [dict((cur.description[i][0], value)
            for i, value in enumerate(row)) for row in cur.fetchall()]
    cur.connection.close()
    return(r[0] if r else None) if one else r


#OBTENER INFORMACION DE LA TABLA DE PACIENTES
my_query = query_db("SELECT * FROM pacientes")
with open("../web_lab_project/src/data/patientsData.js", "w") as outfile:
    outfile.write("export const patientsData = \n")
    json.dump(my_query,outfile, indent=4)


print(my_query)

#OBTENER INFORMACION DE LA TABLA DE MEDICAMENTOS 
medicine_query = query_db("SELECT * FROM medicineData")
with open("../web_lab_project/src/data/medicinesData.js", "w") as outfile:
    outfile.write("import medicineImage from '../Assets/medicineImage.jpg' \n export const medicineData = \n")
    json.dump(medicine_query, outfile, indent=4)

#OBTENER INFORMACION DE LA TABLA DE EQUIPO MEDICO
equipment_query=query_db("SELECT * FROM equipmentData")
with open("../web_lab_project/src/data/equipmentData.js", "w") as outfile:
    outfile.write("import wheelchairImage from '../Assets/wheelchairImage.jpg' \n export const equipmentData = \n")
    json.dump(equipment_query, outfile, indent=4)
