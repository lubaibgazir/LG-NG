import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

 

 

@Injectable({

  providedIn: 'root'

})

export class WorkService {

 

  constructor(private httpService: HttpClient) { }

 

  getWorks() {

                return this.httpService.get('./assets/work-datas.json');

  }

 

 

 

 

 

}
