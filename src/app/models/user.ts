// User model interface
// Interfaz del modelo de Usuario
export interface UserI {
    id?: number; // Optional ID field / Campo ID opcional
    name: string; // Required name field / Campo nombre requerido
    email: string; // Required email field / Campo correo requerido
    password: string; // Required password field / Campo contraseña requerido
}