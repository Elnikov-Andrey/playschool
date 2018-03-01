import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  title_name = 'Andruxa';

  changeTitle() {
    this.title_name = 'Andruxa';

  }

  getday() {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = date.getDay();
    const elem = document.createElement('h4');
    info.appendChild(elem);
    elem.innerHTML = 'Today is ' + days[day];
  }

  constructor() { }

  ngOnInit() {
  }
}
