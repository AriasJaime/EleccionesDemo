import { Drizzle } from '@drizzle/store';
import Elecciones from './contracts/Elecciones.json'
// Opciones:
const options = {
    contracts: [ Elecciones ],
    polls: {
        accounts: 3000,
    },
    web3: {
        fallback: {
            type: "ws",
            //url: "ws://127.0.0.1:7545"
            url: "https://sandbox.truffleteams.com/d543ee28-7dd5-4e40-af1b-00786b0abfdd"
            }
    }
}
// Crear y exportar el objeto drizzle:
export default new Drizzle(options);