import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  steps = [
    {
      label: 'Name',
      id: 1,
      completed: false,
    },
    {
      label: 'Contact',
      id: 2,
      completed: false,
    },
    {
      label: 'Birth',
      id: 3,
      completed: false,
    },
    {
      label: 'Submit',
      id: 4,
      completed: false,
    },
  ];
}
