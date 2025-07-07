import { Routes } from '@angular/router';

import { AddBookComponent } from '../pages/add-book/add-book.component';
import { LibraryComponent } from '../pages/library/library.component';
import { LoginComponent } from '../pages/login/login.component';
import path from 'path';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { EditBookComponent } from '../pages/edit-book/edit-book.component';


export const routes: Routes = [

    { path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent},
    { path: 'add', component: AddBookComponent },
    {path: 'edit', component: EditBookComponent},
    { path: 'library', component: LibraryComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
