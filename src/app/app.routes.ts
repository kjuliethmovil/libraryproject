// src/app/app.routes.ts
// Editado el 24 de octubre de 2024

import { Routes } from '@angular/router';

// Import user-related CRUD components
//import { ShowUserComponent } from './components/user/show-user/show-user.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';

// Import book-related CRUD components
//import { ShowBookComponent } from './components/book/show-book/show-book.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/book/delete-book/delete-book.component';

// Import transaction-related CRUD components
import { ShowTransactionComponent } from './components/transaction/show-transaction/show-transaction.component';
import { CreateTransactionComponent } from './components/transaction/create-transaction/create-transaction.component';
import { EditTransactionComponent } from './components/transaction/edit-transaction/edit-transaction.component';
import { DeleteTransactionComponent } from './components/transaction/delete-transaction/delete-transaction.component';

// Import notification-related CRUD components
import { ShowNotificationComponent } from './components/notification/show-notification/show-notification.component';
import { CreateNotificationComponent } from './components/notification/create-notification/create-notification.component';
import { EditNotificationComponent } from './components/notification/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from './components/notification/delete-notification/delete-notification.component';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },

    // User CRUD routes
    //{ path: 'users', component: ShowUserComponent },
    { path: 'users/new', component: CreateUserComponent },
    { path: 'users/edit/:id', component: EditUserComponent },
    { path: 'users/delete/:id', component: DeleteUserComponent },

    // Book CRUD routes
    //{ path: 'books', component: ShowBookComponent },
    { path: 'books/new', component: CreateBookComponent },
    { path: 'books/edit/:id', component: EditBookComponent },
    { path: 'books/delete/:id', component: DeleteBookComponent },

    // Transaction CRUD routes
    { path: 'transactions', component: ShowTransactionComponent },
    { path: 'transactions/new', component: CreateTransactionComponent },
    { path: 'transactions/edit/:id', component: EditTransactionComponent },
    { path: 'transactions/delete/:id', component: DeleteTransactionComponent },

    // Notification CRUD routes
    { path: 'notifications', component: ShowNotificationComponent },
    { path: 'notifications/new', component: CreateNotificationComponent },
    { path: 'notifications/edit/:id', component: EditNotificationComponent },
    { path: 'notifications/delete/:id', component: DeleteNotificationComponent }
];
