import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { CAUSES } from './mock-causes';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CauseService {
  causes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.causes = database.list('cause')
  }

  getCauses(){
    return this.causes;
  }

  addCause(theCause: Cause) {
    this.causes.push(theCause);
  }

  getCauseById(theId: string) {
    return this.database.object('cause/'+theId);
  }

  updateCause(localUpdatedCause){
    var causeEntryInFirebase = this.getCauseById(localUpdatedCause.$key);
    causeEntryInFirebase.update({
      name: localUpdatedCause.name,
      description: localUpdatedCause.description,
      goal: localUpdatedCause.goal,
      category: localUpdatedCause.category
    });
  }

}
