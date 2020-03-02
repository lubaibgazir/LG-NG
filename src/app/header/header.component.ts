import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-header',

  templateUrl: './header.component.html',

  styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit {

                wInnerWidth;

                isMobileMode = false;

 

  constructor(private doRoute: Router) { }

 

  ngOnInit(): void {

                this.wInnerWidth = window.innerWidth;

  }

 

 

  goToWelcome() {

                this.doRoute.navigate(['/welcome']);

  }

 

 

  onResize(event) {

                this.wInnerWidth = event.target.innerWidth;

  }

 

  triggerMobileMenu() {

                if(this.wInnerWidth < 1024) {

                                this.isMobileMode = !this.isMobileMode;

                }

  }

 

}