import { Component, OnInit } from '@angular/core';

import { WorkService } from '../work.service';

import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

import { style, state, animate, transition, trigger, query, group, animateChild } from '@angular/animations';

 

@Component({

  selector: 'app-work',

  templateUrl: './work.component.html',

  styleUrls: ['./work.component.css'],

  animations: [

    trigger('animateWorkDetailRoute', [

                transition('* => *', [

             query(':enter, :leave',

                  style({ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, 'z-index': 9999 }),

                  { optional: true }),       

             group([

                  query(':enter',[

                      style({ transform: 'translateY(100%)' }),

                      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))

                  ], { optional: true }),

                  query(':leave', [

                      style({ transform:   'translateY(0%)'}),

                      animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))

                  ], { optional: true }),

             ])

        ])

    ])

  ]

})

export class WorkComponent implements OnInit {

 

                workDatas = [];

 

  constructor(private workService: WorkService) { }

 

  ngOnInit(): void {

                this.workService.getWorks().subscribe(resData => {

                                this.workDatas = resData as string [];

                                console.log('workDatas: ', this.workDatas);

                },

                (err: HttpErrorResponse) => {

                                console.log('err: ',err);

                });

 

 

  }

 

 

 

 

 

}