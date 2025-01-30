import { Lector } from "../models/Lector";
import { Creator } from "../models/Creator";
import { Admin } from "../models/Admin"; // Asegúrate de tener este modelo creado
import { UserRole } from "../validations/user";

/**
 * Acciones válidas que se pueden realizar con los roles.
 *
 * @constant
 * @type {{ assign: "assign"; delete: "delete"; }}
 */
export const RolesActions = {
  assign: "assign",
  delete: "delete",
} as const;

/**
 * Tipo derivado de las acciones válidas.
 *
 * @typedef {("assign" | "delete")} RolesAction
 */
export type RolesAction = (typeof RolesActions)[keyof typeof RolesActions];

/**
 * Maneja la asignación o eliminación de roles de usuario.
 *
 * @async
 * @function handleRole
 * @param {UserRole} role - El rol del usuario, debe ser uno de los valores válidos definidos en `UserRole`.
 * @param {string} userId - El ID único del usuario al que se asignará o eliminará el rol.
 * @param {RolesAction} action - La acción a realizar, puede ser `assign` o `delete`.
 * @returns {Promise<any>} - Una promesa que resuelve con el resultado de la operación (creación o eliminación del rol).
 * @throws {Error} - Lanza un error si el rol o la acción no son válidos.
 *
 * @example
 * // Asignar un rol de lector a un usuario
 * await handleRole(UserRole.LECTOR, "12345", RolesActions.assign);
 *
 * @example
 * // Eliminar un rol de creador de un usuario
 * await handleRole(UserRole.CREATOR, "12345", RolesActions.delete);
 */
export const handleRole = async (
  role: UserRole,
  userId: string,
  action: RolesAction
): Promise<any> => {
  const models: Record<UserRole, any> = {
    [UserRole.LECTOR]: Lector,
    [UserRole.CREATOR]: Creator,
    [UserRole.ADMIN]: Admin,
  };

  const model = models[role];
  if (!model) {
    throw new Error("Rol no válido.");
  }

  if (action === RolesActions.assign) {
    return await model.create({ idUser: userId });
  } else if (RolesActions.delete) {
    return await model.deleteOne({ idUser: userId });
  } else {
    throw new Error("Acción no válida.");
  }
};
