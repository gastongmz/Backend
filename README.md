# Portfolio 

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
## Netlify
| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Netlify](https://www.netlify.com/) | [3 ways to deploy React apps to Netlify](https://blog.logrocket.com/3-ways-to-deploy-react-apps-to-netlify/) | [Youtube](https://www.youtube.com/watch?v=sGBdp9r2GSg) |


# Definicion de los end-points :
### La documentacion de los metodoss parametros,tipos, etc. Se encuentra en swagger, estara disponible cuando se ejecute el servidor en la siguiente url: http://localhost:8080/api-docs/#/. 
- [Swagger](http://localhost:8080/api-docs/#/)

<br />


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
- [Font-end](https://github.com/gastongmz/Porfolio)

<br />