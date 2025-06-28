import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shell-app';


  ngOnInit(): void {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('user-data', { detail: { name: 'Jhonatan' } }));
      }, 2000);
  }
}
