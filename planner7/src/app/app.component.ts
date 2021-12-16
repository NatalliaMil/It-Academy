import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'planner7';

  clikParent() {
    console.log('Parent div click');
  }

  clikChild(event: any) {
    console.log('Child div click');
    // event.stopPropagation();
  }
}
