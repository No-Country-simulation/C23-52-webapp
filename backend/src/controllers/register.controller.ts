import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { ERROR_MESSAGES } from "../utils/consts/serviceUser";
import { handleRole, RolesActions} from "../services/role.service";
import { UserRole } from "../validations/user";

/**
 * Controlador para manejar la creación de usuarios.
 *
 * @param {Request} req - La solicitud HTTP.
 * @param {Response} res - La respuesta HTTP.
 */
export const CreateUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, username } = req.body;
    //const sessionCookie = req.cookies?.appSession;

    // if (!sessionCookie) {
    //   res.status(401).json({ message: ERROR_MESSAGES.USER.SESSION_REQUIRED });
    //   return;
    // }

    if (!email) {
      res.status(400).json({ message: ERROR_MESSAGES.USER.EMAIL_REQUIRED });
      return;
    }

    if (!username) {
      res.status(400).json({ message: ERROR_MESSAGES.USER.USERNAME_REQUIRED });
      return;
    }

    const newUser:any = await createUser({
      email,
      username,
      role: UserRole.LECTOR,
    });

    const relatedRole = await handleRole(newUser.role, newUser._id , RolesActions.assign);

    res.status(201).json({
      message: ERROR_MESSAGES.SUCCESS.USER_CREATED,
      user: newUser,
      relatedRole,
    });
  } catch (error: any) {
    if (error.message === ERROR_MESSAGES.USER.DUPLICATE_EMAIL_ERROR) {
      res.status(409).json({ message: error.message });
    } else if (error.message === ERROR_MESSAGES.DATABASE.CONNECTION_ERROR) {
      res.status(503).json({ message: error.message });
    } else {
      console.error("Error desconocido en CreateUserController:", error);
      res.status(500).json({
        message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR,
        error: error.message,
      });
    }
  }
};
