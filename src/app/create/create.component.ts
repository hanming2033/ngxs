import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { TutorialStateModel } from '../state/tutorial.state'
import { AddTutorial } from '../actions/tutorial.action'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {}

  addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name, url }))
  }
}
