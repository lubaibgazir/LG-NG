import { Component, OnInit } from '@angular/core';

 

@Component({

  selector: 'app-skills',

  templateUrl: './skills.component.html',

  styleUrls: ['./skills.component.css']

})

export class SkillsComponent implements OnInit {

 

                skillsItems = [

 

                                {

                                                'title' : 'HTML5/CSS3',

                                                'imgSrc' : 'assets/img/skills/htmlcss.jpg',

                                                'strength' : '99%'

                                },

                                {

                                                'title' : 'Angular',

                                                'imgSrc' : 'assets/img/skills/angular.jpg',

                                                'strength' : '65%'

                                },

                                {

                                                'title' : 'Javascript',

                                                'imgSrc' : 'assets/img/skills/js.jpg',

                                                'strength' : '70%'

                                },

                                {

                                                'title' : 'Responsive Web',

                                                'imgSrc' : 'assets/img/skills/responsive.jpg',

                                                'strength' : '99%'

                                },

                                {

                                                'title' : 'Photoshop',

                                                'imgSrc' : 'assets/img/skills/photoshop.jpg',

                                                'strength' : '98%'

                                }

                ];

 

  constructor() { }

 

  ngOnInit(): void {

  }

 

}
