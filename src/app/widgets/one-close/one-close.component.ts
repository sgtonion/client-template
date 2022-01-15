import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';
import { LayoutNodeBaseWidgetComponent } from 'src/app/layout-module/layout-node-base-widget/layout-node-base-widget.component';

/***
 * Styles are used to change the color/looks of the component and exists in a state
 * eg. state('<name of the state>', style({<the style in this state>}))
 *
 * There can be multiple states and changing between them is not user friendly so...
 *
 * Transitions are used to change between states
 * eg. transition('<name-of-state-1> => <name-of-state-2>', [animate('duration delay easing', <styles during transition>)])
 * transition() 1st argument: => unidriectional, <=> bi-directional
 * animate() 1st argument as string:
 * duration - controls how long the animation should last.
 * delay - how long to wait until it starts to animate
 * easing - controls the ease curve of the transition (ease-in, ease-out, ease-in-out)
 *
 * After defining the **states** and the **transitions** between the states, the trigger needs to be specified
 * to control when should the state changes take place
 * eg. trigger('<name of the trigger>', [states and transitions])
 *
 * Usage: use property bind the name of the trigger on to the tag
 * eg. <some-element [@<name of the trigger>]>="<some state>"
 */
const stateAndTransitions = [
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.8,
    backgroundColor: 'blue'
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ])
];

@Component({
  selector: 'app-one-close',
  templateUrl: './one-close.component.html',
  styleUrls: ['./one-close.component.css'],
  animations: [
    trigger('openClose', stateAndTransitions)
  ]
})
export class OneCloseComponent extends LayoutNodeBaseWidgetComponent {
  isOpen = true;

  constructor() {
    super();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

}
