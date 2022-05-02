# Getting Started

Reto Microservicios

## Tecnologías usadas
- [x] Node.js 4.19.0
- [x] serverless 3.16.0
- [x] aws-sdk 2.1125.0
- [x] usid 1.0.21
- [x] dynamoDB
- [ ] Swagger

## Instalación

Instalar Serverless para poder subir a AWS

```
npm install -g serverless
```

Instalar dependencias

```
npm install
```

## Detalles
El servicio esta diseñado por capas, cada capa tiene una funcionalidad.

- Domain: Es el esquema para almacenar los datos.
- Repository: Permite la conexión con la base de datos, para poder realizar el CRUD.
- Service: Permite realizar las operaciones de negocio, como calcular promedio, desviación estandar y predicción de fallecimiento.
- Controller: Hace uso de los servicios para poder gestionar las peticiones por API.
- Handlers: Son los manejadores de las funciones lambda.

## APIs de consumo
Pueden ser consumidas desde Postman o aplicaciones similares.

### POST - https://nb04m2mf7g.execute-api.us-west-2.amazonaws.com/crearcliente
Permite crear un cliente
```
{
    "name": "Maicol",
    "lastName": "Fuentes",
    "age": 2,
    "birthday": "31/03/2020"
}
```
Devolvera:
```angular2html
{
    "status": 201,
    "body": {
        "message": "Client created successfully",
        "data": {
            "id": "DeQ4ja93YJwrdQt",
            "name": "Maicol",
            "lastName": "Fuentes",
            "age": 2,
            "birthday": "31/03/2020"
        }
    }
}
```

### GET - https://nb04m2mf7g.execute-api.us-west-2.amazonaws.com/kpideclientes
Nos permite ver el promedio de edad de todos los clientes y la desviación estandar:
```angular2html
{
    "status": 200,
    "body": {
        "average": 30.181818181818183,
        "standardDeviation": 13.71673285919714
    }
}
```

### GET - https://nb04m2mf7g.execute-api.us-west-2.amazonaws.com/listclientes
Nos permite ver la lista de los clientes registrados y adicionalmente el promedio de que año podría morir.
```angular2html
{
    "status": 200,
    "body": {
        "clientsData": [
            {
                "id": "DeQSk4kpLsy1kFX",
                "name": "Carolina",
                "lastName": "Casas",
                "birthday": "10/02/2002",
                "age": 20,
                "dateOfDeath": "you're going to have a long life"
            },
            {
                "id": "DePTSX9ArFYo4GZ",
                "name": "Armando",
                "lastName": "Hinojosa",
                "birthday": "28/12/1992",
                "age": 29,
                "dateOfDeath": "you're going to have a long life"
            },
        ],
    }
}
```
