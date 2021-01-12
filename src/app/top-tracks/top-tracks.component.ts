import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../model/Track';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css'],
})
export class TopTracksComponent {
  topTracksList: Track[];
  constructor(
    private ac: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    ac.params.subscribe((param) => {
      console.log(param.id);
      spotifyService
        .getTopTracks(param.id)
        .subscribe((data: { tracks: Track[] }) => {
          this.topTracksList = data.tracks;
        });
    });
  }
}
