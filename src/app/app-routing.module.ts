import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './templates/home/home.component';
import {CatalogueComponent} from "./templates/catalogue/catalogue.component";
import {BlogComponent} from "./templates/blog/blog.component";
import {CoursesComponent} from "./templates/courses/courses.component";
import {LoginComponent} from "./forms/login/login.component";
import {SignupComponent} from "./forms/signup/signup.component";
import {NotfoundComponent} from "./errors/notfound/notfound.component";
import {UserProfileComponent} from "./templates/user-profile/user-profile.component";
import {CategoryComponent} from "./templates/category/category.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
