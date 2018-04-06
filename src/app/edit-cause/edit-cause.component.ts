import { Component, OnInit, Input } from '@angular/core';
import { Cause } from '../cause.model';
import { CauseService } from '../cause.service'

@Component({
  selector: 'app-edit-cause',
  templateUrl: './edit-cause.component.html',
  styleUrls: ['./edit-cause.component.css'],
  providers: [CauseService]
})
export class EditCauseComponent implements OnInit {
  @Input() selectedCause;
  constructor(private causeService: CauseService) { }

  ngOnInit() {
  }

  beginUpdatingCause(cause){
    this.causeService.updateCause(cause);
  }

}
