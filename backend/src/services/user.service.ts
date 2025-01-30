import { User } from "../models/User";
import { IUser } from "../validations/user";
import { ERROR_IDENTIFIERS, ERROR_MESSAGES } from "../utils/consts/serviceUser";

/**
 * Busca un usuario por su correo electrónico.
 *
 * @param {string} email - El correo electrónico del usuario.
 * @returns {Promise<IUser | null>} - Retorna el usuario si existe, o `null` si no se encuentra.
 * @throws {Error} - Lanza un error en caso de problemas con la base de datos o validaciones.
 */
export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    if (!email) {
      throw new Error(ERROR_MESSAGES.USER.EMAIL_REQUIRED);
    }

    const user = await User.findOne({ email }).exec();

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al buscar usuario por correo:", error.message);

      if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
        throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
      }
      if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
        throw new Error(ERROR_MESSAGES.USER.DUPLICATE_EMAIL_ERROR);
      }

      if (error.message.includes(ERROR_IDENTIFIERS.USER.INVALID_EMAIL_FORMAT)) {
        throw new Error(ERROR_MESSAGES.USER.INVALID_EMAIL_FORMAT);
      }

      throw new Error(
        ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR + ": " + error.message
      );
    } else {
      throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
    }
  }
};

/**
 * Crea un nuevo usuario en la base de datos.
 *
 * @param {IUser} userData - Los datos del usuario a crear.
 * @returns {Promise<IUser>} - El usuario creado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la creación.
 */
export const createUser = async (userData: IUser): Promise<IUser> => {
  try {
    if (!userData.email) {
      throw new Error(ERROR_MESSAGES.USER.EMAIL_REQUIRED);
    }

    if (!userData.username) {
      throw new Error(
        ERROR_MESSAGES.USER.USERNAME_REQUIRED ||
          "El nombre de usuario es obligatorio"
      );
    }

    const user = new User(userData);
    return await user.save();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al crear usuario:", error.message);

      if (error.message.includes(ERROR_IDENTIFIERS.USER.DUPLICATE_KEY_ERROR)) {
        throw new Error(ERROR_MESSAGES.USER.DUPLICATE_EMAIL_ERROR);
      }

      if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
        throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
      }

      throw new Error(
        `${ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR}: ${error.message}`
      );
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Actualizar un usuario por su ID.
 *
 * @param {string} userId - El ID del usuario.
 * @param {Partial<IUser>} updateData - Los datos a actualizar.
 * @returns {Promise<IUser | null>} - Una promesa que resuelve con la información del usuario actualizado o null si no se encuentra.
 */

export const updateUserById = async (
  userId: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).exec();
    return updatedUser;
  } catch (error) {
    throw new Error("Error al actualizar el usuario");
  }
};

export const userByid = async (userId: string): Promise<IUser | null> => {
  try {
    const user = await User.findById(userId).exec();
    return user;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
};

/**
 * Eliminar un usuario por su ID.
 *
 * @param {string} userId - El ID del usuario.
 * @returns {Promise<IUser | null>} - Una promesa que resuelve con la información del usuario eliminado o null si no se encuentra.
 */
export const deleteUserById = async (userId: string): Promise<IUser | null> => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId).exec();
    return deletedUser;
  } catch (error) {
    throw new Error("Error al eliminar el usuario");
  }
};
