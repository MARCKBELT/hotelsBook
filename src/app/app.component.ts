import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from "./components/common/top-header/top-header.component";
import { NavbarComponent } from './components/common/navbar/navbar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TopHeaderComponent, NavbarComponent,]
})
export class AppComponent {
  title = 'hotelsBook';
}
