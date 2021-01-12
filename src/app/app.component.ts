import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './model/Item';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FA Store Music';
  artistsList: Item[];
  isClicked = false;

  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.router.navigate(['/']);
  }

  search(searchKey): any {
    if (searchKey !== '') {
      this.artistsList = this.spotifyService.getArtists(searchKey);
    } else {
      this.artistsList = [];
    }
    this.isClicked = false;
    this.router.navigate(['/']);
  }

  clicked(element: HTMLElement): any {
    this.isClicked = true;
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
