import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auto-save',
  templateUrl: './auto-save.component.html',
  styleUrls: ['./auto-save.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(20px)',opacity:'0'}),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({transform: 'translateX(-20px)',opacity:'0'}))
      ])
    ])
  ]
})
export class AutoSaveComponent implements OnInit {
  @Input() autosave;
  constructor() { }
  
  ngOnInit() {
    
  }

}
