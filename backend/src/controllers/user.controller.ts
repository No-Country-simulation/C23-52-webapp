import { Request, Response } from "express";
import { User } from "../models/User";
import { Creator } from "../models/Creator";
import { Lector } from "../models/Lector";
import { Admin } from "../models/Admin";
import { UserRole } from "../validations/user";
import { handleRole, RolesActions } from "../services/role.service";
import { userByid } from "../services/user.service";

/**
 * Obtiene un usuario por su ID.
 *
 * @async
 * @function getUserById
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna el usuario encontrado o un mensaje de error.
 * @throws {Error} - Error 500 si ocurre un problema interno del servidor.
 */
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userByid(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Actualiza los datos de un usuario, manejando cambios en el rol y validando solo los campos diferentes.
 *
 * @async
 * @function updateUser
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna el usuario actualizado o un mensaje de error.
 * @throws {Error} - Error 404 si el usuario no existe, error 400 si no hay cambios, o error 500 si ocurre un problema interno.
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Buscar usuario existente
    const existingUser: any = await userByid(id);
    if (!existingUser) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    let isDifferent = false;
    const fieldsToUpdate: any = {};

    // Comparar los datos enviados con los actuales
    for (const key in updateData) {
      if (updateData[key] !== existingUser[key]) {
        fieldsToUpdate[key] = updateData[key];
        isDifferent = true;
      }
    }

    if (!isDifferent) {
      res.status(400).json({ message: "No hay cambios para actualizar" });
      return;
    }

    // Manejo de cambio de rol
    if (fieldsToUpdate.role && fieldsToUpdate.role !== existingUser.role) {
      // Normalizar el rol actual
      const normalizedRole = existingUser.role as UserRole;

      // Modelo del rol actual basado en existingUser.role
      const currentRoleModel: Record<
        UserRole,
        typeof Admin | typeof Lector | typeof Creator
      > = {
        [UserRole.ADMIN]: Admin,
        [UserRole.LECTOR]: Lector,
        [UserRole.CREATOR]: Creator,
      };

      const currentModel = currentRoleModel[normalizedRole];

      if (currentModel) {
        // Eliminar el rol actual
        await handleRole(normalizedRole, id, RolesActions.delete);
      }

      // Asignar el nuevo rol
      const newRole = fieldsToUpdate.role as UserRole;
      const newRoleModel: Record<
        UserRole,
        typeof Admin | typeof Lector | typeof Creator
      > = {
        [UserRole.ADMIN]: Admin,
        [UserRole.LECTOR]: Lector,
        [UserRole.CREATOR]: Creator,
      };

      const newModel = newRoleModel[newRole];

      if (newModel) {
        await handleRole(newRole, id, RolesActions.assign);
      }
    }

    // Actualizar los datos en la base de datos
    const user = await User.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
    res.status(200).json({
      message: "Usuario actualizado con éxito.",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Elimina un usuario de la base de datos, eliminando también su rol si lo tiene asignado.
 *
 * @async
 * @function deleteUser
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna un mensaje de éxito o un mensaje de error.
 * @throws {Error} - Error 500 si ocurre un problema interno.
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Buscar usuario existente
    const existingUser = await userByid(id);
    if (!existingUser) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    // Eliminar el rol del usuario
    const deletionPromises = [
      handleRole(existingUser.role as UserRole, id, RolesActions.delete),
    ];

    await Promise.all(deletionPromises);

    // Eliminar el usuario de la base de datos
    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Usuario eliminado correctamente." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


