import { State, Selector, Action, StateContext } from '@ngxs/store'
import { Tutorial } from '../models/tutorial.model'
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action'

export interface TutorialStateModel {
  tutorials: Tutorial[]
}

@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})
export class TutorialState {
  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials
  }

  @Action(AddTutorial)
  add(s: StateContext<TutorialStateModel>, action: AddTutorial) {
    const state = s.getState()
    s.patchState({
      tutorials: [...state.tutorials, action.payload]
    })
  }

  @Action(RemoveTutorial)
  remove(s: StateContext<TutorialStateModel>, action: RemoveTutorial) {
    s.patchState({
      tutorials: s.getState().tutorials.filter(tut => {
        return tut.name !== action.payload
      })
    })
  }
}
