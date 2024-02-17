import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.css'],
})
export class Work {
  @Input()
  Image: string = '/assets/work%20%231-1500w.png'
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  @Input()
  Title: string = 'MOTECH'
  constructor() {}
}
