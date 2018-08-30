import * as joi from 'joi'

import * as baseConfig from './base'

const envVarsSchema = joi.object({
  LOG_LEVEL: joi.string()
    .allow(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
    .default('info'),
  LOGGER_ENABLED: joi.boolean()
    .truthy('TRUE')
    .truthy('true')
    .falsy('FALSE')
    .falsy('false')
    .default(true)
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

export const config = {
  logger: {
    level: envVars.LOGGER_LEVEL || 'info',
    enabled: envVars.LOGGER_ENABLED
  }
}