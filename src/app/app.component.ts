import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { DemoComponent } from "./demo/demo.component";
import { FrontendComponent } from "./frontend/frontend.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink ,NavbarComponent, DemoComponent, FrontendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elghorfa';
}
