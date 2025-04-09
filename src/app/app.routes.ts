import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { RegisterComponent } from './shared/pages/register/register.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { NotesComponent } from './shared/pages/notes/notes.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { SinglePostComponent } from './features/main-pages/single-post/single-post.component';
import { AllPostsComponent } from './features/main-pages/all-posts/all-posts.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    {
        path: '', component: AuthLayoutComponent, children: [
            { path: 'login', component: LoginComponent, title: "Login" },
            { path: 'register', component: RegisterComponent, title: "Register" }
        ]
    },

    {
        path: '', component: MainLayoutComponent, children: [
            { path: '', redirectTo: 'post', pathMatch: 'full'  },
            { path: 'notes', component: NotesComponent, title: "Notes" },
            { path: 'post', component: SinglePostComponent, title: "Post Details" },
            { path: 'posts', component: AllPostsComponent, title: "Posts" }
        ]
    },

    { path: '**', component: NotfoundComponent, title: "Not Found" }
];
