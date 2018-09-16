import * as joi from 'joi'

// List of environment values defined as enums. 
export enum EnvNames {
  Development = "development",
  Test = "test",
  Staging = "staging",
  Production = "production"
}

// Default port for node server to start on
export const DEFAULT_PORT = 3000

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(EnvNames)
    // .allow(['development', 'test', 'staging', 'production'])
    .required(),
  PORT: joi.number()
    .optional()
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

// Base configuration that hosts env, env booleans, and port
export const config = {
  env: process.env.NODE_ENV,
  isDevelopment: process.env.NODE_ENV === EnvNames.Production,
  isTest: process.env.NODE_ENV === EnvNames.Test,
  isStaging: process.env.NODE_ENV === EnvNames.Staging,
  isProduction: process.env.NODE_ENV === EnvNames.Production,
  server: {
    port: Number(process.env.PORT || DEFAULT_PORT)
  }
}