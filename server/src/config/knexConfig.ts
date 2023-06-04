// Import Config
import config from './constant';
// Import Static

// Import Middleware

// Import Controllers

// Import Interface

// Import Validators

// Import Helpers

// Import Transformers

// Import Libraries

// Import Models

// Import Thirdparty
import moment from 'moment';
import { NextFunction } from 'express';
export namespace Knex {
    export const dbConfig : any = {
      client: 'postgresql',
      timezone: 'UTC',
      connection: {
        host: config.app.DB_HOST,
        database: config.app.DB_NAME,
        user: config.app.DB_USERNAME,
        password: config.app.DB_PASSWORD,
        port: config.app.DB_PORT,
        charset: 'utf8mb4',
        typeCast: function (field:any, next:NextFunction) {
          if (field.type == 'DATETIME') {
            if(field.string()) {
              return moment(field.string()).format('YYYY-MM-DD HH:mm:ss');
            }
          }
          return next();
        }
        // typeCast: function(field:any, next:NextFunction) {
        //     if (field.type == 'JSON') {
        //         return (JSON.parse(field.string()));
        //     }
        //     return next();
        // }
      },
      pool: {
        min: 10,
        max: 100,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations/',
        disableMigrationsListValidation:true
      },
    }
  }

  export default { Knex }