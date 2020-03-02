import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

 

import { WelcomeComponent } from './welcome/welcome.component';

import { WorkComponent } from './work/work.component';

import { WorkDetailComponent } from './work/work-detail/work-detail.component';

import { SkillsComponent } from './skills/skills.component';

 

const routes: Routes = [

                { path: '', redirectTo: '/welcome', pathMatch: 'full' },

                { path: 'welcome', component: WelcomeComponent },

                { path: 'work', component: WorkComponent, children: [

                                {path: ':id', component: WorkDetailComponent}

                ] },

                { path: 'skills', component: SkillsComponent },

                { path: '**', redirectTo: '/welcome'},

];

 

@NgModule({

                imports: [

                                RouterModule.forRoot(routes),

                ],

                exports: [

                                RouterModule

                ]

})

 

export class AppRoutingModule {

 

}