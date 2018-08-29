// reference: https://blog.risingstack.com/node-js-project-structure-tutorial-node-js-at-scale/
import {config as base_config} from './components/base'
import {config as logger_config} from './components/logger'

// console.log('base_config :', JSON.stringify(base_config, undefined,2));
// console.log('logger_config :', JSON.stringify(logger_config, undefined,2));

export const config = Object.assign({}, base_config, logger_config)

// // Example: https://blog.morizyun.com/javascript/library-typescript-dotenv-environment-variable.html

// import * as dotenv from 'dotenv'

// if (process.env.NODE_ENV !== 'production') {
//     dotenv.load();

//     //

//     // Load environment specif .env files
//     let path;
//     switch (process.env.NODE_ENV) {
//       case "test":
//         path = `${__dirname}/../../.test.env`;
//         break;
//       default:
//         path = `${__dirname}/../../.development.env`;
//     }

//     dotenv.config({ path: path });
//     }


// export class Config {
//     public static server: {} = {
//         env: (process.env.NODE_ENV || 'development'),
//         port: process.env.PORT || 3000,
//         isProd: ( process.env.NODE_ENV === 'production' )
//     }

//     public static dbMain: {} = {
//         host: process.env.MAIN_DB_HOST || 'localhost',
//         port: process.env.MAIN_DB_PORT || 3306,
//         name: process.env.MAIN_DB_NAME,
//         user: process.env.MAIN_DB_USER,
//         password: process.env.MAIN_DB_PASSWORD
//     }
// }
