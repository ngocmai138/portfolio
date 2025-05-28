import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { EducationComponent } from './components/education/education.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { LeaveInfoComponent } from './components/leave-info/leave-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LeftMenuComponent,
    MainMenuComponent,
    RightMenuComponent,
    EducationComponent,
    WorkHistoryComponent,
    LeaveInfoComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
