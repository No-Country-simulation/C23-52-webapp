import { env } from './env';

/**
 * Configuración de Auth0.
 * 
 * @property {string} domain - El dominio de Auth0.
 * @property {string} audience - La audiencia de Auth0.
 */
export const authConfig = {
  domain: env.DOMAIN_AUTH0,
  audience: env.AUDIENCE_AUTH0,
};