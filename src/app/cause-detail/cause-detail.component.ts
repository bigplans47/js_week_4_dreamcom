import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';
import { CauseService } from '../cause.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './cause-detail.component.html',
  styleUrls: ['./cause-detail.component.css'],
  providers: [CauseService]
  //cause service provider connects us with database and allows us to use Firebase data across multiple components
})

export class CauseDetailComponent implements OnInit {
  causeId: string;

  constructor(private route: ActivatedRoute, private location: Location, private causeService: CauseService) { }
  causeToDisplay;

  ngOnInit(){
    this.route.params.forEach((urlParameters)=>{
      this.causeId = urlParameters['id'];
    })
    this.causeToDisplay = this.causeService.getCauseById(this.causeId)
  }
     //the above two lines set up route paramaters and generate urls based off of Firebase hash ids
   //calls causeToDisplay and getCauseById(this.causeId) to tell causeService to route us to specific causes

}
