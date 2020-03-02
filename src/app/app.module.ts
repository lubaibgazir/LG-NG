import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

 

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { WorkComponent } from './work/work.component';

import { WorkDetailComponent } from './work/work-detail/work-detail.component';

import { SkillsComponent } from './skills/skills.component';

import { FooterComponent } from './skills/footer/footer.component';

 

@NgModule({

  declarations: [

    AppComponent,

    HeaderComponent,

    WelcomeComponent,

    WorkComponent,

    WorkDetailComponent,

    SkillsComponent,

    FooterComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }