const joi = require('joi')

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'test', 'staging', 'production'])
    .required(),
  PORT: joi.number()
    .required()
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export const config = {
  env: process.env.NODE_ENV,
  // logger: {
  //   level: process.env.LOG_LEVEL || 'info',
  //   enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false
  // },
  server: {
    port: Number(process.env.PORT)
  }
}