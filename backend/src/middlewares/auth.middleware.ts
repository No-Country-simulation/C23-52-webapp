import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import { authConfig } from "../config/auth0";

/**
 * Middleware para verificar y validar tokens JWT emitidos por Auth0.
 * 
 * @type {import("express").RequestHandler}
 */
export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    /**
     * Habilita el almacenamiento en caché de las claves públicas para mejorar el rendimiento.
     * @type {boolean}
     */
    cache: true,

    /**
     * Habilita la limitación de la tasa de solicitudes para evitar sobrecargar el servidor de claves.
     * @type {boolean}
     */
    rateLimit: true,

    /**
     * Número máximo de solicitudes permitidas al servidor de claves por minuto.
     * @type {number}
     */
    jwksRequestsPerMinute: 5,

    /**
     * URL del servidor de claves públicas de Auth0.
     * @type {string}
     */
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }) as any, // Se usa 'as any' para evitar problemas de tipos en TypeScript.

  /**
   * Identificador de la API que se está protegiendo.
   * @type {string}
   */
  audience: authConfig.audience,

  /**
   * Emisor del token JWT, que es el dominio de Auth0.
   * @type {string}
   */
  issuer: `https://${authConfig.domain}/`,

  /**
   * Algoritmo de firma que se espera que se use para firmar el token JWT.
   * @type {string[]}
   */
  algorithms: ["RS256"],
});