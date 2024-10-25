// Book model interface
// Interfaz del modelo de Libro
export interface BookI {
    id?: number; // Optional ID field / Campo ID opcional
    title: string; // Required title field / Campo título requerido
    author: string; // Required author field / Campo autor requerido
    publishedDate: string; // Required published date field / Campo fecha de publicación requerido
}