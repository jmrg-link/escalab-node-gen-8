<div align="center">
  <h1>ESCALAB ACADEMY</h1>
  <img src="./git/assets/images/api-rest-nodejs-express.png" alt="nodejs logo" height="300px" >
  <h3 style="font-weight:bold;" > BACKEND NODJES CON EXPRESS.JS 🧑‍💻</h3>
  <h4>Author : Jesus Mª Rico Gonzalez</h4>
  <h5><strong><em> Curso de Node.js Gen 8</strong></em></h5>
  </br>
</div>


## Requisitos :clipboard:

* Conocimiento básico de JavaScript es necesario
* Conocimiento básico de programación es necesario
* Conocimiento básico de ECMAscript 6 || ES2015
* Poder realizar instalaciones en el equipo como administrador
* Se puede lanzar el contenido del curso en OSX (Mac), Windows o Linux.
* Conocimiento verbos http requerido.
* Conocimiento de Git necesario.
* **Nota :** prework usado **WebStorm** & **VScode**

## Comenzando 🚀

 * Este ejercicio se guardara en github y los ejemplos sin llaves privadas y configuradas en ficheros .env con copia de fichero ejemplo en example.env limpio que pueda ser usadas para desplegar en otros servidores locales o remotos.

* En todo el proyecto se usaran objetos exportables y seran llamados en fichero de './config/index.js' refiriendose al procces.env para estructurar una logica comprensible y ordenada de datos privados de variables de entorno.
* Las api utilizadas en servicios seran ocultadas para no ser consumidas por terceras personas con acceso al repositorio. 👌

## Descripción :notebook:
**Backend Nodejs Escalab Academy**
* Este ejercicio tiene por objetivo tener conocimientos de express y nodejs en nivel basico o medio.
* Este ejercicio está construido 100% en js con metodologia SOLID.
* El backend usara estrictamente configuracion de https por default desde local hasta deploy.

## Entorno de Desarrollo Local
* Se utilizan distintos usos de desarrollo ; WSL2 , CMD.
* Se utiliza https con el protocolo http2.
* Se utilizara desarrollo y produccion : DEV _ PROD tanto en bbdd como en backend express.
* Para usar el desarrollo local siga la guia de configuracion.

## Guia de Desarrollo
* Abrir notepad como administrador y configurar el archivo hosts **c:\Windows\System32\drivers\etc**
  * Añadir la siguiente linea
    * **127.0.0.1** < doble TAB >  **api.local** [ Esto añade una url para generar una llave ssl con openssl ]
    * El dominio local usado permite tener una direccion para usar con postman al cual tambien tendremos que ingresar los certificados locales.

* Generamos llave SSL con OPENSSL
```bash
# Generar de manera facil tu certificado SSL con openssl
openssl genrsa -des3 -out server.key 1024 # generate .key with password
openssl req -new -key server.key -out server.csr # generate .csr with password <named>.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt # generate .crt
openssl x509 -inform PEM -outform PEM -in server.crt -out server-crt.pem # generate .crt to .pem
openssl rsa -in server.key -text > server-key.pem # generate .key to .pem
```
* Configurar WSL2 con MongoDB server de Windows
  * WSL puede funcionar en localhost de windows y wsl2 debido al enlace de enrutamiento de docker.
  * Para poder usar WSL2 con bash o zsh tienes que poner la IP que asigna WSL2 en tu ruta de hostname con el comando linux.
    * Comando linux: **cat /etc/resolv.conf**
    * Ip a utilizar en mongodb connect : **nameserver < ip >** 
  * En windows tenemos que modificar un archivo para que mongodb tenga alcance a las IP`s del sistema global.
    * Ruta y Fichero : **C:\Program Files\MongoDB\Server\5.0\bin** **mongod.cfg**
    * Cambio : **Bindip:** **0.0.0.0** [ Esto leera todas las rutas de ips del sistema ]

* Configuracion Servidor Http2 con ficheros creados.
  * La configuracion de http/2 permite ampliar el protocolo http 1.1 al http2 permitiendo enviar multiples ficheros simultaneamente y si en cliente utiliza estrictamente  http/1.1 el servidor tiene habilitada la opcion de habilitado para ser usado. 

```javascript
// Generate structure fs 
const http2 = require( 'http2' )
const { readFileSync } = require( 'fs' )

// Read fs key xxx.pem
const options = {
    key: readFileSync( 'server.pem' ) ,
    cert: readFileSync( 'server.crt.pem' ) ,
    allowHTTP1: true
}

// create http or http2 with fs
const server = http2.createSecureServer( options , app )

// listen server http with express APP
server.listen( port , () => {
    console.log( `🧑‍💻 - Server running ${ process.env.NODE_DEV ? dev : prod } in port :${ port } - 🌐` )
} )
```

## Tareas y especificaciones :hash:
* **Tarea #1** Objetivos 🆕
  * Crear proyecto con la definición de arquitectura limpia del curso
  * Crear y configurar el archivo de server.js
  * Crear la conexión con la base de datos mongo
  * Definir un esquema de modelos para su proyecto (Es libre lo que quieran hacer)
  *  💬 -> **Fecha de Inicio:**  Lunes 07 de marzo 00:00 🕛
  *  🗨️ -> **Fecha de entrega:** Lunes 21 de marzo hasta las 00:00 🕛
* **Tarea #2** Objetivos 🆕
  * Definir las rutas para su proyecto
  * Los middlewares sujetos a esa ruta deben ser: create, read, update, remove, remove soft, count y pagination y deben implementarse en su respectivo archivo de controllers
  *  💬 -> **Fecha de Inicio:**  Lunes 28 de marzo 00:00 🕛
  *  🗨️ -> **Fecha de entrega:** Lunes 11 de abril 00:00 🕛

## Dependencias usadas :bookmark_tabs:
``` javascript
"dependencies": {
    "app-root-path": "^3.0.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-validation": "^3.0.8",
    "firebase-admin": "^10.0.2",
    "google-auth-library": "^7.14.1",
    "http2-express-bridge": "^1.0.7",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.2.6",
    "morgan": "^1.10.0",
    "winston": "^3.6.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
```