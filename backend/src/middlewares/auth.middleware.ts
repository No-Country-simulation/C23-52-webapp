import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";
import { authConfig } from "../config/auth0";

console.log(authConfig.audience);
console.log(authConfig.domain);

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }) as any,
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,

  algorithms: ["RS256"],
  getToken: (req) => {
    console.log(req);
    if (req.cookies?.appSession) {
      console.log("Token JWT encontrado en cookies 2");

      const token = req.cookies.appSession;

      console.log(token);
      return token;
    }
    throw new Error("No authorization token was found in cookies");
  },
});
