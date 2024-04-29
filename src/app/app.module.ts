import {NotfoundComponent} from './errors/notfound/notfound.component'
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './templates/header/header.component';
import {FooterComponent} from './templates/footer/footer.component';
import {HomeComponent} from './templates/home/home.component';
import {SliderComponent} from './components/slider/slider.component';
import {CatalogueComponent} from './templates/catalogue/catalogue.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BlogComponent} from "./templates/blog/blog.component";
import {CoursesComponent} from "./templates/courses/courses.component";
import {LoginComponent} from "./forms/login/login.component";
import {SignupComponent} from "./forms/signup/signup.component";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {environment} from '../enviroments/enviroment';
import {SocialNetworkComponent} from './components/social-network/social-network.component';
import {LogoComponent} from './components/logo/logo.component';
import {UserProfileComponent} from './templates/user-profile/user-profile.component';
import {CategoryComponent} from './templates/category/category.component';
import {ProductComponent} from './templates/product/product.component';
import {ToastrModule} from "ngx-toastr";
import {AngularFireModule} from "@angular/fire/compat";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {ButtonComponent} from './components/button/button.component';
import {NgOptimizedImage} from "@angular/common";
import {ShoppingCartComponent} from './templates/shopping-cart/shopping-cart.component';
import {CategoryItemComponent} from './components/category-item/category-item.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    CatalogueComponent,
    BlogComponent,
    CoursesComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    SocialNetworkComponent,
    LogoComponent,
    UserProfileComponent,
    CategoryComponent,
    ProductComponent,
    ButtonComponent,
    SliderComponent,
    ShoppingCartComponent,
    CategoryItemComponent,
    CategoryItemComponent,
    ProductItemComponent,
    ProductItemComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
