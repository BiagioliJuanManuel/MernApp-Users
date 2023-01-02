require('dotenv').config();


const app = require('./app');
require('./database');

// Ejecucion del servidor, escuchando en puerto.
async function main(){
    await app.listen(app.get('port'))
        console.log('Servidor corriendo en puerto: ', app.get('port'));
}

main();