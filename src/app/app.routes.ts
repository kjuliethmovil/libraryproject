// Fecha de edición: 2024-10-20, 14:05
// Editado: Definición de rutas para los componentes de la aplicación
import { Routes } from '@angular/router';
import { ShowUserComponent } from './components/user/show-user/show-user.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';

import { ShowBookComponent } from './components/book/show-book/show-book.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';

import { ShowTransactionComponent } from './components/transaction/show-transaction/show-transaction.component';
import { CreateTransactionComponent } from './components/transaction/create-transaction/create-transaction.component';
import { EditTransactionComponent } from './components/transaction/edit-transaction/edit-transaction.component';

import { ShowNotificationComponent } from './components/notification/show-notification/show-notification.component';
import { CreateNotificationComponent } from './components/notification/create-notification/create-notification.component';
import { EditNotificationComponent } from './components/notification/edit-notification/edit-notification.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/users', 
        pathMatch: 'full'  // Redirecciona la raíz a la página de usuarios
    },
    {
        path: "users",
        component: ShowUserComponent  // Componente que muestra usuarios
    },
    {
        path: "users/new",
        component: CreateUserComponent  // Componente para crear usuarios
    },
    {
        path: "users/edit/:id",
        component: EditUserComponent  // Componente para editar usuarios
    },
    {
        path: "books",
        component: ShowBookComponent  // Componente que muestra libros
    },
    {
        path: "books/new",
        component: CreateBookComponent  // Componente para crear libros
    },
    {
        path: "books/edit/:id",
        component: EditBookComponent  // Componente para editar libros
    },
    {
        path: "transactions",
        component: ShowTransactionComponent  // Componente que muestra transacciones
    },
    {
        path: "transactions/new",
        component: CreateTransactionComponent  // Componente para crear transacciones
    },
    {
        path: "transactions/edit/:id",
        component: EditTransactionComponent  // Componente para editar transacciones
    },
    {
        path: "notifications",
        component: ShowNotificationComponent  // Componente que muestra notificaciones
    },
    {
        path: "notifications/new",
        component: CreateNotificationComponent  // Componente para crear notificaciones
    },
    {
        path: "notifications/edit/:id",
        component: EditNotificationComponent  // Componente para editar notificaciones
    },
];
