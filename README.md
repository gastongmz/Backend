# Backend  

<p align="center">
<img src="https://raw.githubusercontent.com/PhantomScript/asset-container/b26b0ebaaa13bec7fac796ee0b8296676df6ee0b/developer-portfolio/website.svg" alt="" width="450px"/>
</p>

## Back-end Porfolio

<br />

<br /><br />

<br /> <br />

# Instalacion :arrow_down:
### Necesitas instalar git y Node

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

```
node --version
git --version
```

<br />

### Clonar el repo
```
git clone https://github.com/gastongmz/Backend/
cd Backend
```
### Instalar los paquetes
```
npm install
```
### Iniciar el server
```
npx nodemon start
```

<br />

# Estructura:

```bash
├── README.md  
├── package-lock.json
├── package.json     
├── .env
├── .gitignore
├── server.js
├── swagger.json
└──src   
   ├── controllers
   │   ├── solicitudes.controller.js         
   │   └── usuarios.controller.js   
   ├── db
   │   └── config.js
   ├── middlewares
   │   ├── jstValidator.js  
   │   └── validateField.js
   ├── models
   │   ├── Solicitudes.js
   │   └── Ususarios.js
   ├── routes
   │   ├── solicitudes.routes.js
   │   └── ususarios.route.js
   └─── services
       ├── aut.service.js
       ├── solicitudes.service.js
       └── ususarios.service.js
   

```
<br />

# Uso:
### Configuracion.

Ej:
```javascript
PORT = 8080
CONNECTION_STRING = *******
SALT = **********
PRIVATE_KEY = ***********


```
# Hosting :globe_with_meridians:

# Seguridad:
### Para la autenticacion de front a los endpoints, se utilizo JSON Web Token (JWT). 
- [JWT](https://jwt.io/)

<br />

# API Endpoints:
### La definicion de los metodos, parametros,tipos, etc. Se encuentra en swagger, estara disponible cuando se ejecute el servidor en la siguiente url: 'http://localhost:8080/api-docs/#/'. 
- [Swagger](http://localhost:8080/api-docs/#/)
<p align="center">
<img src="https://github.com/gastongmz/Backend/blob/main/asset/swagger.png" alt="" width="650px"/>
</p>

<br />


# Base de datos:
### Para la persistencia de datos se utilizo mongodb en cloud. 
- [Mongodb](https://cloud.mongodb.com/)
### Colecciones:
<p align="center">
<img src="https://github.com/gastongmz/Backend/blob/main/asset/db.png" alt="" width="650px"/>
</p>

<br />

# Paquetes que se usaron:

| Paquetetes  |
| :-------------: |
| express  |
| jsonwebtoken  |
| mongoose |
| wagger-ui-express |
| bcrypt  |
| cors |


<br />

# Font-end :world_map:
- [Font-end]( https://github.com/gastongmz/Porfolio )



<br />
