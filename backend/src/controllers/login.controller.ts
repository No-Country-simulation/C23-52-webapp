import { Request, Response } from "express";
import { getUserByEmail } from "../services/user.service";
import { ERROR_MESSAGES, ERROR_IDENTIFIERS } from "../utils/consts/serviceUser";

const jwt_decode = require("jwt-decode");

/**
 * Controlador para manejar las solicitudes de inicio de sesión.
 *
 * @param {Request} req - La solicitud HTTP.
 * @param {Response} res - La respuesta HTTP.
 */
const LoginController = async (req: Request, res: Response): Promise<void> => {
  try {
    //const token = req.headers.authorization?.split(" ")[1];

    // if (!token) {
    //   res.status(401).json({ message: ERROR_MESSAGES.AUTH.TOKEN_NOT_PROVIDED });
    //   return;
    // }

    // const decodedToken: any = jwt_decode(token);

    //const email = decodedToken.email;
    const email = req.body.email;
    
    if (!email) {
      res.status(400).json({ message: ERROR_MESSAGES.AUTH.INVALID_TOKEN });
      return;
    }

    const user = await getUserByEmail(email);

    if (!user) {
      res.status(404).json({ message: ERROR_MESSAGES.USER.USER_NOT_FOUND });
      return;
    }

    res.status(200).json({
      message: ERROR_MESSAGES.SUCCESS.LOGIN_SUCCESS,
      user: user,
    });
  } catch (error: any) {
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res
        .status(503)
        .json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.USER.DUPLICATE_KEY_ERROR)
    ) {
      res
        .status(409)
        .json({ message: ERROR_MESSAGES.USER.DUPLICATE_EMAIL_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.USER.INVALID_EMAIL_FORMAT)
    ) {
      res
        .status(400)
        .json({ message: ERROR_MESSAGES.USER.INVALID_EMAIL_FORMAT });
    } else {
      console.error("Error desconocido en LoginController:", error);
      res.status(500).json({
        message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR,
        error: error.message,
      });
    }
  }
};

export { LoginController };
