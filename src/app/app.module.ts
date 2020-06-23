import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TemplatesModule } from './templates/templates.module';
import { PagesModule } from './pages/pages.module';
import { CommentModule } from './comment/comment.module';
import { LoginModule } from './login/login.module';
import { ErrorInterceptor } from './shared/_helpers/error.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContactModule } from './contact/contact.module';
import { Globals } from './shared/_helpers/globals';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ArticleModule,
    ContactModule,
    CommentModule,
    UserModule,
    TemplatesModule,
    LoginModule,
    PagesModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
