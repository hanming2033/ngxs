import { Tutorial } from '../models/tutorial.model'

// * define action using static and constructor
export class AddTutorial {
  static readonly type = '[TUTORIAL] AddTutorial]'
  constructor(public readonly payload?: Tutorial) {}
}

export class RemoveTutorial {
  static readonly type = '[TUTORIAL] RemoveTutorial]'
  constructor(public readonly payload?: string) {}
}
