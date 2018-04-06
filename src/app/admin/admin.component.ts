import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { CauseService } from '../cause.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CauseService]
})
export class AdminComponent implements OnInit {

  constructor(private causeService: CauseService) { }

  submitForm(newCause, newDescription, newGoal, newCategory) {
    let addThisCause: Cause = new Cause(newCause, newDescription, newGoal, newCategory)
    this.causeService.addCause(addThisCause);
  }

  ngOnInit() {
  }

}
