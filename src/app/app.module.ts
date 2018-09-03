import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home-component/home.component';
import { NavbarComponent } from '../navbar-component/navbar.component';
import { GithubFollowersComponent } from '../github-followers-component/github-followers.component';
import { GithubProfileComponent } from '../github-profile-component/github-profile.component';
import { PostsComponent } from '../posts-component/posts.component';
import { NotFoundComponent } from '../not-found-component/notfound.component';
import { PipesComponent } from '../pipes-component/pipes.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { SummaryPipe } from './summary.pipe';
import { TemplateDrivenFormComponent } from '../template-driven-form-component/template-driven-form.component';
import { ReactiveFormComponent } from '../reactive-form-component/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    PostsComponent,
    NotFoundComponent,
    PipesComponent,
    SummaryPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'pipes',
        component: PipesComponent
      },
      {
        path: 'templatedrivenform',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'reactiveform',
        component: ReactiveFormComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
