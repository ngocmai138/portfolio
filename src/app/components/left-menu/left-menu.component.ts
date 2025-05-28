import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent {
  avatarPath = 'assets/images/avatar.jpg';
  iconPaths = {
    facebook: 'assets/icons/facebook.svg',
    instagram: 'assets/icons/instagram.svg',
    twitter: 'assets/icons/twitter.svg',
    linkedin: 'assets/icons/linkedin.svg',
    youtube: 'assets/icons/youtube.svg',
    dribbble: 'assets/icons/dribbble.svg',
    download: 'assets/icons/download.svg',
  };

  constructor() {}
}
