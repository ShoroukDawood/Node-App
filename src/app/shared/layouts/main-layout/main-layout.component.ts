import { Component } from '@angular/core';
import { SinglePostComponent } from "../../../features/main-pages/single-post/single-post.component";
import { NavbarComponent } from "../../../features/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
