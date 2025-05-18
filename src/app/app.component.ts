// src/app/app.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StatsComponent } from './stats/stats.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,HeroComponent,AboutComponent,StatsComponent,ServiceComponent,FooterComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
