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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ArticleModule,
    CommentModule,
    UserModule,
    TemplatesModule,
    LoginModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
