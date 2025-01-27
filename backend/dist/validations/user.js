"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateSchema = exports.UserSchema = exports.UserRole = void 0;
const zod_1 = require("zod");
var UserRole;
(function (UserRole) {
    UserRole["CREATOR"] = "Creator";
    UserRole["ADMIN"] = "Admin";
    UserRole["LECTOR"] = "Lector";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.UserSchema = zod_1.z.object({
    username: zod_1.z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
    email: zod_1.z.string().email("Email inválido"),
    role: zod_1.z.nativeEnum(UserRole),
});
exports.UserUpdateSchema = exports.UserSchema.partial();
