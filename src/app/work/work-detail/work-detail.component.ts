import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { WorkService } from '../../work.service';

 

@Component({

  selector: 'app-work-detail',

  templateUrl: './work-detail.component.html',

  styleUrls: ['./work-detail.component.css']

})

export class WorkDetailComponent implements OnInit {

                workItemId;

                workItemDetail: any = [];

 

  constructor(private doActivatedRoute: ActivatedRoute, private doRoute: Router, private workService: WorkService) { }

 

 

 

  ngOnInit(): void {

 

                this.doActivatedRoute.params.subscribe(params => {

                                this.workItemId = params.id;

                });

 

                this.workService.getWorks().subscribe(result => {

                                this.workItemDetail = result as string [];

                                this.workItemDetail = this.workItemDetail.filter((element, index) => {

                                                return element.id === this.workItemId;

                                });

                               

                                if(this.workItemDetail.length > 0) {

                                                this.workItemDetail = this.workItemDetail[0];

                                }

                                else {

                                                this.doRoute.navigate(['']);

                                }

                               

                               

                });

 

 

  }

 

 

 

}